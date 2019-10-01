import React, { useReducer } from 'react';

type Actions = { type: 'add'; text: string } | { type: 'remove'; idx: number };

interface Todo {
  text: string;
  completed: boolean;
}

// Type state is a array of todos
type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, completed: false }];
    case 'remove':
      return state.filter((_, i) => action.idx !== i);
    default:
      return state;
  }
};

const ReducerExp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      <button onClick={() => dispatch({ type: 'add', text: '...' })}>➕</button>
    </div>
  );
};

export default ReducerExp;
