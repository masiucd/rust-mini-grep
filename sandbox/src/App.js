import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DiceRoller from './components/diceRoller/DiceRoller';
import Header from './components/global/Header';
import './App.css';
import { AppWrapper, GlobalStyle } from './components/global/globalstyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <AppWrapper>
        <Switch>
          <Route path="/diceroller" exact component={DiceRoller} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
