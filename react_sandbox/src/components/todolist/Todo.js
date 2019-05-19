import React from 'react';
import { Trash } from 'styled-icons/boxicons-regular/Trash';
import { Check } from 'styled-icons/boxicons-regular/Check';

const Todo = ({ index, todo, completeTodo, deleteTodo }) => (
  <div className="todo">
    <h3 style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
    </h3>
    <Check size="30" id="check" onClick={() => completeTodo(index)} />{' '}
    <Trash size="30" id="trash" onClick={() => deleteTodo(index)} />
  </div>
);

export default Todo;
