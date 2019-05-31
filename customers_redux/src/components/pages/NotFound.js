import React from 'react';
import styled from 'styled-components';
import { colours } from '../../styles/globalStyles';

const NotFound = () => (
  <NotFoundWrapper>
    <h1>
      ooooppppsss <span>Page</span> Not <span>Found!</span>{' '}
    </h1>
    <p>Please head back to the main page!</p>
  </NotFoundWrapper>
);

export default NotFound;

const NotFoundWrapper = styled.div`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3rem;
    padding: 1.6rem;
    text-shadow: 1px 2px #333;
    span:nth-child(1) {
      color: ${colours.yellowDD};
    }
    span:nth-child(2) {
      color: ${colours.yellowD};
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 1.5;
    padding: 1.6rem;
    text-shadow: 1px 2px #333;
  }
`;
