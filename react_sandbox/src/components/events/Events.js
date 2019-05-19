import React from 'react';
import styled from 'styled-components';
import WiseSquare from './WiseSquare';
import CopyDemo from './CopyDemo';
import AnnoyingForm from './AnnoyingForm';

export default function Events() {
  return (
    <EventWrapper>
      <WiseSquare />
      <AnnoyingForm />
      <CopyDemo />
    </EventWrapper>
  );
}

const EventWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
  .WiseSquare {
    width: 15em;
    height: 15em;
    background: slateblue;
    margin: 0 auto;
    &:hover {
      background: steelblue;
    }
  }

  section {
    margin-top: 2em;
    font-size: 3em;
  }
`;
