import uuid from 'uuid/v4';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../types';

export const initialState = {
  todos: [
    {
      id: uuid(),
      text: 'Go to the gym!',
      completed: false,
    },
    {
      id: uuid(),
      text: 'Get some food!',
      completed: false,
    },
    {
      id: uuid(),
      text: 'Go to  bed!',
      completed: false,
    },
  ],
};

export const addTodoAction = todo => ({ type: ADD_TODO, payload: todo });

export const toggleTodoAction = todoId => ({
  type: TOGGLE_TODO,
  payload: todoId,
});
export const removeTodoAction = todoId => ({
  type: DELETE_TODO,
  payload: todoId,
});
