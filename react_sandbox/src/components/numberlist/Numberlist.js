import React, { Component } from 'react';
import styled from 'styled-components';
import NumItem from './NumItem';

export default class Numberlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    this.removeNums = this.removeNums.bind(this);
    this.renderNum = this.renderNum.bind(this);
  }

  removeNums(num) {
    this.setState(prev => ({
      nums: prev.nums.filter(n => n !== num),
    }));
  }

  renderNum() {
    return this.state.nums.map((n, i) => (
      <NumItem key={i} val={n} removeNums={this.removeNums} />
    ));
  }

  render() {
    return <NumsWrapper>{this.renderNum()}</NumsWrapper>;
  }
}

const NumsWrapper = styled.div`
  height: 100%;
  width: 97%;
  padding: 15em;
  border-radius: 2rem;
  box-shadow: 4px 3px 4px 2px #cecece;
  margin: 0 auto;
  text-align: center;
  .nums {
    font-size: 4em;
    button {
      padding: 1.3em;
      border: none;
      border-radius: 2em;
      background: #000;
      color: #fff;
      margin: 0 2em;
      font-size: 0.4em;
    }
  }
`;
