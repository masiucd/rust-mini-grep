import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCustomer, fetchCustomers } from '../actions';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      on: false,
    };
    this.renderUsers = this.renderUsers.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    console.log(this.props.fetchCustomers());
    console.log(this.props.contacts);
  }

  handleToggle() {}

  renderUsers() {}

  render() {
    console.log(this.props.contacts);
    return (
      <div>
        <h3>Customers</h3>
        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ contacts: state.contacts });
export default connect(
  mapStateToProps,
  { fetchCustomers }
)(Customers);
