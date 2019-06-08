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

  addTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id),
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos: todosState } = this.state;
    const todos = todosState.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        completeTodo={this.completeTodo}
        remove={this.remove}
        update={this.update}
      />
    ));

    return (
      <div className="todo-wrapper">
        <TodoForm addTodo={this.addTodo} onChange={this.onChange} />
        {todos}
      </div>
    );
  }
}
