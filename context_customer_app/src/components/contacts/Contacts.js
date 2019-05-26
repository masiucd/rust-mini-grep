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
              <h3>
                <span>Contacts</span> List
              </h3>
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
  h3 {
    text-align: center;
    font-size: 3.6rem;
    span {
      color: #262730;
    }
  }
  /* text-align: center; */
`;
