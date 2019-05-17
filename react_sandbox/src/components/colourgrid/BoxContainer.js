import React from 'react';
import styled from 'styled-components';
import { choice, colours, randomColur } from '../../helper';
import Box from './Box';

const BoxContainer = props => {
  const boxes = Array.from({ length: props.numBoxes }).map(() => <Box />);
  return <ColourGridWrap>{boxes}</ColourGridWrap>;
};

BoxContainer.defaultProps = {
  numBoxes: 38,
};

const ColourGridWrap = styled.div`
  background: #323;
  padding: 4rem;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-content: center;
  .box {
    height: 20em;
    width: 20em;
    border: 4px solid ${choice(colours)};
  }
`;

export default BoxContainer;
