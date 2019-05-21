import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../types';
import { initialState } from '../actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
