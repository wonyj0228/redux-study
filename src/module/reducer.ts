import { createReducer } from '@reduxjs/toolkit';
import {
  ADD_TODO,
  addAction2,
  DELETE_TODO,
  dltAction2,
  TodoAction,
} from './actions';

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

/**
 * Redux Toolkit
 */

export const reducer2 = createReducer<ITodo[]>([], (builder) => {
  builder.addCase(addAction2, (state, action) => {
    state.unshift({ id: action.payload.id, text: action.payload.text });
  });
  builder.addCase(dltAction2, (state, action) =>
    state.filter((todo) => todo.id !== action.payload)
  );
});
