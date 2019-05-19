import React, { useState } from 'react';
import styled from 'styled-components';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
  padding: 1em;
  input {
    border: none;
    width: 100%;
    padding: 0.7em 0.9em;
    border-radius: 2rem;
    box-shadow: 4px 3px 4px 2px #cecece;
    display: block;
    margin: 0 auto;
    font-size: 2.4em;
  }
`;
