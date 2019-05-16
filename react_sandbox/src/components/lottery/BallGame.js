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

  generate = () => {};

  handleClick = () => {};

  render() {
    return (
      <BallGameWrapper>
        <h1>{this.props.title}</h1>
        {this.state.nums.map(num => (
          <Ball num={num} />
        ))}
        <Button>Click</Button>
      </BallGameWrapper>
    );
  }
}
const BallGameWrapper = styled.div`
  background: #fefe;
  width: 65%;
  margin: 0 auto;
  border-radius: 2em;
  padding: 4em;
  display: flex;
  justify-content: center;
`;
