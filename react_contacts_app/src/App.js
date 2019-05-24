import React, { useState } from 'react';
import { GlobalStyle } from './components/globals/GlobalStyles';
import Header from './components/globals/Header';
import { BrowserRouter } from 'react-router-dom';
import { brandings, randomHelper } from './helper';
import Contacts from './components/Contacts';

export default function App() {
  const [titles, setTitles] = useState(randomHelper(brandings));
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header branding={titles} />
      <div className="pageWrapper">
        <Contacts />
      </div>
    </BrowserRouter>
  );
}
