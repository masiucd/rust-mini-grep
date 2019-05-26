import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { Card } from './Contact';
import { ADD_CONTACT } from '../../types';
import { mainColurs } from '../../global/Globalstyles';
import { Button } from '../../global/button';
import { Consumer } from '../../context';

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(dispatch, e) {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };
    dispatch({ type: ADD_CONTACT, payload: newContact });
    this.setState(prev => ({
      name: (prev.name = ''),
      email: (prev.email = ''),
      phone: (prev.phone = ''),
    }));
  }

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <>
              <Card
                size="2.7rem"
                radius
                background={mainColurs.transparentLight}
                padding="2rem 4rem"
              >
                <div className="card-body">
                  <h3>Add Contact</h3>
                  <Form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      placeholder="Enter Phonenumber"
                      name="phone"
                      value={phone}
                      onChange={this.handleChange}
                    />
                    <Button
                      type="submit"
                      background={mainColurs.tomato}
                      colour={mainColurs.white}
                      hoverBG={mainColurs.blackLight}
                    >
                      Add Contact
                    </Button>
                  </Form>
                </div>
              </Card>
            </>
          );
        }}
      </Consumer>
    );
  }
}

const Form = styled.form`
  padding: 3rem;
  label {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
  input {
    border: none;
    padding: 0.6rem 0.9rem;
    width: 100%;
    border-radius: 1.4rem;
  }
  button {
    margin: 1.4rem 0 0 0;
    width: 100%;
  }
`;
