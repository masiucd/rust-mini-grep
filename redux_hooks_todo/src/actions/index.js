import uuid from 'uuid/v4';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../types';

export const initialState = {
  todos: [
    {
      id: uuid(),
      name: 'Go to the gym',
      completed: false,
    },
    {
      id: uuid(),
      name: 'Go out with the dog',
      completed: false,
    },
    {
      id: uuid(),
      name: 'make some BBQ booooi!!!',
      completed: false,
    },
    {
      id: uuid(),
      name: 'Get some nice sleep',
      completed: false,
    },
  ],
};
export const addTodoAction = todo => ({ type: ADD_TODO, payload: todo });

export const toggleTodoAction = todoId => ({
  type: TOGGLE_TODO,
  payload: todoId,
});
export const deleteTodoAction = todoId => ({
  type: DELETE_TODO,
  payload: todoId,
});
