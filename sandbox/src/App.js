import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DiceRoller from './components/diceRoller/DiceRoller';
import Header from './components/global/Header';
import IconList from './components/iconList/IconList';
import './App.css';
import { AppWrapper, GlobalStyle } from './components/global/globalstyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <AppWrapper>
        <Switch>
          <Route path="/diceroller" component={DiceRoller} />
          <Route path="/iconlist" component={IconList} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
