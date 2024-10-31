// import { configureStore } from "@reduxjs/toolkit";
import { Action, createStore } from 'redux';
/**
 * Store ?
 * : State(앱에서 바뀌는 data)를 저장하는 곳
 * - 반드시 reducer를 필요로 함
 *
 * Reducer
 * : state를 변경하는 function
 * : return 값은 변경될 state값이어야 함
 * : 변경전 state값을 매개변수로 받을 수 있음
 *
 * Subscribe(callback)
 * : store 안에 있는 state의 변화를 감지해, 콜백함수 실행
 */

const add = document.getElementById('add') as HTMLButtonElement;
const minus = document.getElementById('minus') as HTMLButtonElement;
const number = document.querySelector('span') as HTMLSpanElement;

number.innerText = '0';

const actionType = {
  add: 'ADD',
  minus: 'MINUS',
};

const reducer = (state = 0, action: Action) => {
  switch (action.type) {
    case actionType.add:
      return state + 1;
      break;
    case actionType.minus:
      return state - 1;
      break;
    default:
      return state;
      break;
  }
};

const store = createStore<number, Action>(reducer);

store.subscribe(() => {
  number.innerText = String(store.getState());
});

add.addEventListener('click', () => store.dispatch({ type: actionType.add }));
minus.addEventListener('click', () =>
  store.dispatch({ type: actionType.minus })
);

export {};
