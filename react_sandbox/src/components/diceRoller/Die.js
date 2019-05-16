import React from 'react';
import styled from 'styled-components';
import { shake } from '../../styles';

export default function Die({ die1, die2, rolling }) {
  return (
    <DieWrapper>
      <i className={`Die fas fa-dice-${die1} ${rolling ? 'shake' : ''}`} />
      <i className={`Die fas fa-dice-${die2} ${rolling ? 'shake' : ''}`} />
    </DieWrapper>
  );
}

const DieWrapper = styled.div`
  .Die {
    font-size: 10rem;
    padding: 0.25rem;
    color: slateblue;
    width: 20%;
  }
  .shake {
    animation-name: ${shake};
    animation-duration: 1.2s;
  }
`;
