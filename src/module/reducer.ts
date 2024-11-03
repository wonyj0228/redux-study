import { ADD_TODO, DELETE_TODO, TodoAction } from "./actions";

export interface ITodo {
  id: string;
  text: string;
}

export const reducer = (state: ITodo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ id: action.payload.id, text: action.payload.text }, ...state];
      break;
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
      break;
    default:
      return state;
      break;
  }
};
