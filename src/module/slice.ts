import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from './reducer';

const initialState: ITodo[] = [];

export const toDos = createSlice({
  name: 'toDosReducer',
  initialState,
  reducers: {
    add: (
      state: ITodo[],
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      state.unshift({ id: action.payload.id, text: action.payload.text });
    },
    remove: (state: ITodo[], action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { add, remove } = toDos.actions;
