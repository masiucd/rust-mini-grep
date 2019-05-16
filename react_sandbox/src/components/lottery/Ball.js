import React from 'react';
import styled from 'styled-components';

const Ball = ({ num }) => (
  <BallWrap>
    <span className="ball">{num}</span>
  </BallWrap>
);

const BallWrap = styled.div`
  .ball {
    background-color: tomato;
    border-radius: 50%;
    color: #fff;
    display: inline-block;
    width: 5em;
    height: 5em;
    padding: 2em;
    text-align: center;
    margin-right: 0.5em;
    font-weight: bold;
    font-size: 1.5em;
  }
`;

export default Ball;
