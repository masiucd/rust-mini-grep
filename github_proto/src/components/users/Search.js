import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { text } = this.state;
    const { settingAlert, searchUsers } = this.props;
    e.preventDefault();
    if (text === '') {
      settingAlert('Please enter something', 'danger');
    }
    searchUsers(text);
    this.setState({ text: '' });
  };

  render() {
    const { clearUsers, checkUsers } = this.props;
    const { text } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
            placeholder="search a user"
            className="input"
          />
          <button type="submit" className="btn btn-primary btn-lg">
            Search
          </button>
        </form>

        {checkUsers ? (
          <button
            onClick={clearUsers}
            type="button"
            className="btn btn-danger btn-lg button my-5"
          >
            clear
          </button>
        ) : null}
      </>
    );
  }
}

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  checkUsers: PropTypes.bool.isRequired,
  settingAlert: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired,
};
