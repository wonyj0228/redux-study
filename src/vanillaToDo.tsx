import { Action, legacy_createStore } from 'redux';

const form = document.querySelector('form') as HTMLFormElement;
const input = document.querySelector('input') as HTMLInputElement;
const ul = document.querySelector('ul') as HTMLUListElement;

const ADD: string = 'ADD' as const;
const DELETE: string = 'DELETE' as const;

interface IState {
  text: string;
  id: string;
}

interface AddAction extends Action<string> {
  text: string;
  id: string;
}
interface DltAction extends Action<string> {
  text: string;
  id: string;
}

type ActionType = AddAction | DltAction;

const reducer = (state: IState[] = [], action: ActionType) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: action.id }];
      break;
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
      break;
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

store.subscribe(() => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const dltBtn = document.createElement('button');
    li.id = toDo.id;
    li.innerText = toDo.text;

    dltBtn.innerText = 'delete';
    dltBtn.addEventListener('click', () => {
      store.dispatch({ type: DELETE, id: toDo.id, text: toDo.text });
    });

    li.appendChild(dltBtn);
    ul.appendChild(li);
  });
});

const onSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({ type: ADD, text: toDo, id: String(Date.now()) });
};

form.addEventListener('submit', onSubmit);

export {};
