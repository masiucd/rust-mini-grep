import React, { Component } from 'react';
import styled from 'styled-components';
import Ball from './Ball';
import { Button } from '../global/buttons';

export default class BallGame extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40,
  };

  state = {
    nums: Array.from({ length: this.props.maxBalls }),
  };

  generate = () => {
    this.setState(prevState => ({
      nums: prevState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  };

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <BallGameWrapper>
        <h1>{this.props.title}</h1>
        {this.state.nums.map((num, index) => (
          <Ball key={index} num={num} />
        ))}
        <Button onClick={this.handleClick}>Generate</Button>
      </BallGameWrapper>
    );
  }
}
const BallGameWrapper = styled.div`
  h1 {
    display: block;
    position: absolute;
    bottom: 200px;
  }
  background: #fefe;
  width: 95%;
  margin: 0 auto;
  border-radius: 2em;
  padding: 10em;
  display: flex;
  justify-content: center;
  position: relative;
  button {
    position: absolute;
    top: 200px;
  }
`;
