import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../actions';

function TodoList(props) {
  const { todos } = props;
  console.log(Object.values(todos));
  return (
    <div>
      <h3>todo list</h3>
    </div>
  );
}

const mapstateToProps = state => ({ todos: state.todos });
export default connect(
  mapstateToProps,
  { toggleTodoAction, deleteTodoAction }
)(TodoList);
