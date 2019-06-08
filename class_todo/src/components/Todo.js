import React, { Component } from 'react';

export default class Todo extends Component {
  state = {
    task: this.props.task,
    isEditing: false,
  };

  handleToggle = () => {
    const { id } = this.props.todo;
    this.props.completeTodo(id);
  };

  handleRemove = () => {
    const { id } = this.props.todo;
    this.props.remove(id);
  };

  toggleEdit = () => {
    this.setState(prev => ({
      isEditing: !prev.isEditing,
    }));
  };

  handleUpdate = e => {
    e.preventDefault();
    const { id } = this.props.todo;
    const { task: taskState } = this.state;
    this.props.update(id, taskState);
    this.setState({
      isEditing: false,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { task, completed } = this.props.todo;

    return (
      <div className="todo">
        {this.state.isEditing ? (
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              onChange={this.handleChange}
              value={this.state.task}
            />
            <button type="submit">Edit</button>
          </form>
        ) : (
          <>
            <div className="content">
              <h4
                className={completed ? 'completed' : ''}
                onClick={this.handleToggle}
              >
                {task}{' '}
              </h4>
              <span>
                {' '}
                <i className="fas fa-pencil-alt" onClick={this.toggleEdit} />
              </span>{' '}
              <span onClick={this.handleRemove}>
                <i className="far fa-trash-alt" />{' '}
              </span>{' '}
            </div>
          </>
        )}
      </div>
    );
  }
}
