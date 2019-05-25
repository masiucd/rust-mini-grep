import React, { Component } from 'react';
import styled from 'styled-components';
import { data } from '../helper';
import Contact from './Contact';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      customers: data,
    };
  }

  render() {
    const { customers } = this.state;
    return (
      <ContactsWrapper>
        {customers.map(customer => (
          <Contact key={customer.id} customer={customer} />
        ))}
      </ContactsWrapper>
    );
  }
}

const ContactsWrapper = styled.div`
  margin: 0 auto;
  /* text-align: center; */
`;
