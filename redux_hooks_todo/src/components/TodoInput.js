import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../actions';

export default function TodoInput() {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();
  const addTodo = todo => dispatch(addTodoAction(todo));

  const handleChange = e => {
    setTodo(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (todo.trim() === '') return;
    addTodo({
      id: uuid(),
      text: todo,
      completed: false,
    });
    setTodo('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Add a Todo</h4>
      <input type="text" placeholder="add a todo" onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </Form>
  );
}

const Form = styled.form`
  padding: 4rem;
  border-radius: 3rem;
  max-width: 60%;
  margin: 0 auto;
  margin-top: 2rem;
  h4 {
    font-size: 3rem;
    margin: 1rem;
  }
  input {
    border: none;
    font-size: 1.8rem;
    font-weight: 800;
    border-radius: 3rem;
    padding: 0.6rem 0.9rem;
    box-shadow: 3px 2px 20px 3px #222;
    width: 100%;
    &:hover {
      transition: 0.3s linear;
      background: #fefe;
    }
  }
  button {
    border: none;
    font-size: 1.2rem;
    font-weight: 800;
    border-radius: 2rem;
    padding: 0.6rem 0.9rem;
    box-shadow: 3px 2px 20px 3px #222;
    width: 60%;
    margin-top: 2rem;
    &:hover {
      transition: 0.3s linear;
      background: #fefe;
    }
  }
`;
