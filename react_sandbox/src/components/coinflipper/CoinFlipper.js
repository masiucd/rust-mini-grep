import React, { Component } from 'react';
import styled from 'styled-components';
import Coin from './Coin.js';
import { choice } from '../../helper';
import { Button } from '../global/buttons';
import { coinsSide } from '../../helper';

export default class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' },
    ],
  };

  state = {
    currCoins: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  };

  handleClick = () => {
    this.flipCoin();
  };

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(prev => ({
      currCoins: newCoin,
      nFlips: prev.nFlips + 1,
      nHeads: prev.nHeads + (newCoin.side === 'heads' ? 1 : 0),
      nTails: prev.nTails + (newCoin.side === 'tails' ? 1 : 0),
    }));

    console.log(newCoin);
  }

  render() {
    const { nFlips, nHeads, nTails, currCoins } = this.state;
    return (
      <CoinWrapper>
        <h1>Let's Play this game!!!</h1>
        {currCoins && <Coin side={currCoins} />}
        <p>
          Out of {nFlips} flips, there have been {nHeads} heads and {nTails}{' '}
          tails.
        </p>
        <Button onClick={this.handleClick}>Flip</Button>
      </CoinWrapper>
    );
  }
}

const CoinWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  border: 3px solid #fefe;
  text-align: center;
  padding: 3em;
  h1 {
    font-size: 8.6em;
    margin: 0.6em 0;
  }
  p {
    font-size: 2.6em;
    margin: 0.6em 0;
  }
  img {
    width: 20em;
  }
`;
