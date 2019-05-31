/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '../../styles/styled-comp/Form';
import { updateContact, getContact } from '../../actions/customerActions';
import InputGroup from '../layout/InputGroup';
import { FormBtn } from '../../styles/styled-comp/Button';

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      username: '',
      website: '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone, username, website } = this.state;
    if (name === '') {
      this.setState({ errors: { name: 'Name is Required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is Required' } });
      return;
    }

    const { id } = this.props.match.params;
    const uptdContact = {
      id,
      name,
      email,
      phone,
      username,
      website,
    };

    this.props.updateContact(uptdContact);
    // clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      username: '',
      website: '',
    });

    this.props.history.push('/');
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, phone, username, website, errors } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup
          type="text"
          placeholder="enter your name"
          label="Name"
          name="name"
          value={name}
          handleChange={this.handleChange}
          error={errors.name}
        />
        <InputGroup
          type="email"
          placeholder="enter your email"
          label="Email"
          name="email"
          value={email}
          handleChange={this.handleChange}
          error={errors.email}
        />
        <FormBtn type="submit">submit</FormBtn>
      </Form>
    );
  }
}

Edit.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ contact: state.contact.contact });

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(Edit);
