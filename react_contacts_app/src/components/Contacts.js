import React, { useState } from 'react';
import { contactsData } from '../helper';
import styled from 'styled-components';
import Contact from './Contact';

export default function Contacts() {
  const [contacts, setContacts] = useState(contactsData);
  const [on, setOn] = useState(false);

  const toggleOn = id => {
    setOn(!on);
  };
  const deleteClickHandler = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <ContactsWrapper>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          toggleOn={toggleOn.bind(contact.id)}
          on={on}
          deleteClickHandler={deleteClickHandler.bind(contact.id)}
        />
      ))}
    </ContactsWrapper>
  );
}

const ContactsWrapper = styled.div`
  margin: 0 auto;
  /* text-align: center; */
`;
