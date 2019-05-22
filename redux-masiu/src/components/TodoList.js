import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoComplete, deleteTodoAction } from '../redux';
// import { TrashAlt } from 'styled-icons/boxicons-solid/TrashAlt';
import styled from 'styled-components';

function TodoList(props) {
  const { todos } = props;

  const toggleTodo = todo => {
    props.toggleTodoComplete(todo);
  };
  const deleteTodo = todo => {
    props.deleteTodoAction(todo);
  };

  console.log(todos);
  return (
    <>
      <Ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.complete ? 'line-through' : '' }}
            >
              {todo.name}
            </span>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={toggleTodo.bind(null, todo.id)}
            />{' '}
            <span> {todo.complete ? ' completed' : 'uncompleted'} </span>
            <span id="del-x" onClick={deleteTodo.bind(null, todo.id)}>
              {' '}
              X{' '}
            </span>
          </li>
        ))}
      </Ul>
    </>
  );
}
const Ul = styled.ul`
  padding: 2em;
  box-shadow: 3px 4px 3px 3px #ccc;
  width: 74%;
  margin: 0 auto;
  border-radius: 2em;
  text-align: center;
  list-style: none;
  position: relative;
  li {
    font-size: 3em;
    padding: 1em;
    &:hover {
      transition: 0.2s linear;
      color: steelblue;
    }
  }
  input[type='checkbox'] {
    margin: 0 0.8em;
    border: 1px solid steelblue;
  }
  #del-x {
    float: right;
    padding: 0.3em;
    border-radius: 2em;
    box-shadow: 3px 4px 3px 3px #ccc;
  }
`;

const mapStateToProps = state => ({ todos: state.todos });

export default connect(
  mapStateToProps,
  { toggleTodoComplete, deleteTodoAction }
)(TodoList);
