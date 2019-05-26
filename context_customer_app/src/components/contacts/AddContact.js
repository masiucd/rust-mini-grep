/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { ArrowDropDown } from 'styled-icons/material/ArrowDropDown';
import { Card } from './Contact';
import { ADD_CONTACT } from '../../types';
import { mainColurs } from '../../global/Globalstyles';
import { Button } from '../../global/button';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import { shake } from '../../global/animation';

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      errors: {},
      show: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(dispatch, e) {
    e.preventDefault();
    const { name, email, phone, errors } = this.state;

    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone number is required' } });
      return;
    }

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
      errors: (prev.errors = {}),
    }));

    // redirect home
    this.props.history.push('/');
  }

  toggleShow() {
    this.setState(prev => ({
      show: !prev.show,
    }));
  }

  render() {
    const { name, email, phone, errors, show } = this.state;

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
                center
                size="5rem"
              >
                <div className="card-body">
                  <h3>
                    Add Contact{' '}
                    <span onClick={this.toggleShow}>
                      {' '}
                      <ArrowDropDown size="55" className="dropIcon" />{' '}
                    </span>{' '}
                  </h3>
                  {show ? (
                    <Form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                      <TextInputGroup
                        label="Name"
                        type="text"
                        placeHolder="enter name..."
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                      <TextInputGroup
                        label="Email"
                        type="email"
                        placeHolder="enter email..."
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                      />
                      <TextInputGroup
                        label="Phone number"
                        type="text"
                        placeHolder="enter your number..."
                        name="phone"
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
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
                  ) : null}
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
    font-size: 1.7rem;
    margin-right: 0.5rem;
  }
  input {
    border: none;
    padding: 0.8rem 0.9rem;
    width: 100%;
    margin: 0.9rem 0;
    border-radius: 1.4rem;
  }
  button {
    margin: 1.4rem 0 0 0;
    width: 100%;
  }

  .diplay-error {
    border: 2px solid ${mainColurs.blackPrimary};
    background: ${mainColurs.tomato};
    color: ${mainColurs.white};
  }
  .shake {
    animation-name: ${shake};
    animation-duration: 1.2s;
  }
`;
