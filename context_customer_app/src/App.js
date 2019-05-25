import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global/Globalstyles';
import Header from './components/layout/Header';
import { Container, Row } from './global/grid';
import { randomStuff, funnyTitle } from './helper';
import { Provider } from './context';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <GlobalStyle />
          <Header title={randomStuff(funnyTitle)} />
          <Container>
            <AddContact />
            <Contacts />
          </Container>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
