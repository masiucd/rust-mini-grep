import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../global/button';
import { mainColurs } from '../../global/Globalstyles';

export default function About() {
  return (
    <AboutWrapper>
      <h1>About Contact Manager</h1>
      <p>Simple app to manage contacts!</p>
      <Link to="/">
        <Button
          background={mainColurs.brown}
          colour={mainColurs.white}
          hoverBG={mainColurs.blackLight}
        >
          Back Home
        </Button>
      </Link>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  h1 {
    font-size: 6rem;
  }
  p {
    font-size: 1.8rem;
  }
  a {
    margin-top: 1.5rem;
  }
`;
