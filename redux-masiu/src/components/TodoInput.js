import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../redux';
import uuid from 'uuid/v4';
import styled from 'styled-components';

const TodoInput = props => {
  const [todo, setTodo] = useState('');

  const onChange = event => {
    setTodo(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    props.addTodoAction({
      id: uuid(),
      name: todo,
      complete: false
    });
    setTodo('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="form-div">
        <Input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  border: none;
  padding: 2em;
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    display: block;
    margin: 0 auto;
    margin-top: 12px;
    padding: 0.7em 1em;
    border: none;
    border-radius: 1em;
    width: 100%;
    font-size: 1.8em;
    font-weight: 900;
    &:hover {
      transition: 0.2s linear;
      background: steelblue;
      color: #fff;
    }
  }
`;
const Input = styled.input`
  border: none;
  padding: 0.6em 9em;
  width: 100%;
  margin: 0 auto;
  font-size: 2.2em;
  border-radius: 1em;
  box-shadow: 3px 4px 3px 3px #ccc;
  &:hover {
    transition: 0.2s linear;
    background: steelblue;
    color: #fff;
  }
`;

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodoAction }
)(TodoInput);
