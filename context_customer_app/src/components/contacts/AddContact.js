import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from './Contact';
import { mainColurs } from '../../global/Globalstyles';
import { Button } from '../../global/button';

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  render() {
    const { name, email, phone } = this.state;
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
            <Form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                placeholder="Enter Phonenumber"
                name="phone"
                value={phone}
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
