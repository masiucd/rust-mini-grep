import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { todosDb } from '../helper';

export default class TodoList extends Component {
  state = {
    todos: todosDb,
  };

  completeTodo = id => {
    const completed = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: completed });
  };

  render() {
    const { todos: todosState } = this.state;
    const todos = todosState.map(todo => (
      <Todo key={todo.id} todo={todo} completeTodo={this.completeTodo} />
    ));

    return (
      <div className="todo-wrapper">
        <h1>TodoList</h1>
        {todos}
      </div>
    );
  }
}
