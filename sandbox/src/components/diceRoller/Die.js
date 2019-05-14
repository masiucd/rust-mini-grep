import React from 'react';
import styled from 'styled-components';

export default function Die({ die1, die2 }) {
  return (
    <DieWrapper>
      <i className={`Die fas fa-dice-${die1}`} />
      <i className={`Die fas fa-dice-${die2}`} />
    </DieWrapper>
  );
}

const DieWrapper = styled.div`
  .Die {
    font-size: 10rem;
    padding: 0.25rem;
    color: slateblue;
  }
`;
