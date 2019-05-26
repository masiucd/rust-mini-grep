import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from './Contact';
import { mainColurs } from '../../global/Globalstyles';
import { Button } from '../../global/button';

export default class AddContact extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };

  consructor(props) {
    props(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: 'Jimi',
    email: 'jimi@gmail.com',
    phone: '123 222 2321',
  };

  render() {
    const { name, email, phone } = this.props;
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
            <Form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                defaultValue={name}
                ref={this.nameInput}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                defaultValue={email}
                ref={this.emailInput}
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                placeholder="Enter Phonenumber"
                name="phone"
                defaultValue={phone}
                ref={this.phoneInput}
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
