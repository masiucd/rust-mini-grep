import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Trash } from 'styled-icons/typicons/Trash';
import { toggleTodoAction, removeTodoAction } from '../actions';
import TodoInput from './TodoInput';

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = todo => dispatch(toggleTodoAction(todo));
  const removeTodo = todo => dispatch(removeTodoAction(todo));

  console.log(todos);
  return (
    <TodoWrapper>
      <h1 className="title">Todo List with React redux and hooks</h1>
      <TodoInput />
      <ul className="list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            >
              {todo.text}{' '}
            </span>
            <span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleTodo.bind(null, todo.id)}
              />{' '}
            </span>
            <span onClick={removeTodo.bind(null, todo.id)}>
              {' '}
              <Trash size="35" />{' '}
            </span>{' '}
          </li>
        ))}
      </ul>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  max-width: 89%;
  text-align: center;
  padding: 3rem;
  margin-top: 2rem;
  .title {
    background-image: url('https://images.pexels.com/photos/1802268/pexels-photo-1802268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-position: center;
    background-repeat: no-repeat;
    font-size: 5rem;
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ul {
    list-style: none;
    font-size: 2.6rem;
    padding: 3rem;
    height: 100%;
    li {
      padding: 0.7rem;
      border-bottom: 2px solid #000;
      input[type='checkbox'] {
        margin: 0 0.4rem;
      }
    }
  }
`;
