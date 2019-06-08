import React, { Component } from 'react';

export default class Todo extends Component {
  handleToggle = () => {
    const { id } = this.props.todo;
    this.props.completeTodo(id);
  };

  render() {
    const { task, completed } = this.props.todo;

    return (
      <div className="todo">
        <h4
          className={completed ? 'completed' : ''}
          onClick={this.handleToggle}
        >
          {task}{' '}
        </h4>
        <span>
          {' '}
          <i className="fas fa-pencil-alt" />
        </span>{' '}
        <span>
          <i className="far fa-trash-alt" />{' '}
        </span>{' '}
      </div>
    );
  }
}
