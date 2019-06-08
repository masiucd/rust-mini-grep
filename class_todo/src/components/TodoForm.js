import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class TodoForm extends Component {
  state = {
    task: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuid(), completed: false };
    this.props.addTodo(newTodo);
    this.setState({
      task: '',
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
