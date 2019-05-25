import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global/Globalstyles';
import Header from './components/Header';
import { Container, Row } from './global/grid';
import { randomStuff, funnyTitle } from './helper';
import Contacts from './components/Contacts';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Header title={randomStuff(funnyTitle)} />
        <Container>
          <Contacts />
        </Container>
      </BrowserRouter>
    </div>
  );
}
