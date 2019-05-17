import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components/globals/globalstyles';
import Header from './components/globals/Header';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header>
          <h1>App</h1>
        </Header>
      </BrowserRouter>
    </>
  );
}
