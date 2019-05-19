import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DiceRoller from './components/diceRoller/DiceRoller';
import Header from './components/global/Header';
import BoxContainer from './components/colourgrid/BoxContainer';
import BallGame from './components/lottery/BallGame';
import CoinFlipper from './components/coinflipper/CoinFlipper';
import Events from './components/events/Events';
import IconList from './components/iconList/IconList';
import ButtonList from './components/buttonlist/ButtonList';
import NumberList from './components/numberlist/Numberlist';
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
          <Route path="/ballgame" component={BallGame} />
          <Route path="/coinflipper" component={CoinFlipper} />
          <Route path="/colours" component={BoxContainer} />
          <Route path="/events" component={Events} />
          <Route path="/buttonlist" component={ButtonList} />
          <Route path="/numberlist" component={NumberList} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
