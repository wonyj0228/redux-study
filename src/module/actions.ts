import { createAction } from '@reduxjs/toolkit';

export const ADD_TODO = 'todo/ADD_TODO' as const;
export const DELETE_TODO = 'todo/DELETE_TODO' as const;

export function addAction(id: string, text: string) {
  return {
    type: ADD_TODO,
    payload: { id, text },
  };
}

export function dltAction(id: string) {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
}

export type TodoAction =
  | ReturnType<typeof addAction>
  | ReturnType<typeof dltAction>;

/**
 * Redux Toolkit
 */

export const addAction2 = createAction(
  'todo/ADD_TODO',
  (id: string, text: string) => ({
    payload: { id, text },
  })
);
export const dltAction2 = createAction<string>('todo/DELETE_TODO');
