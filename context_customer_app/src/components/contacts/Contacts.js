import React, { Component } from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import { Consumer } from '../../context';

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <ContactsWrapper>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </ContactsWrapper>
          );
        }}
      </Consumer>
    );
  }
}

const ContactsWrapper = styled.div`
  margin: 0 auto;
  /* text-align: center; */
`;
