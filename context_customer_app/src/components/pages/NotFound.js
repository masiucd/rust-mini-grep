import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../global/button';
import { mainColurs } from '../../global/Globalstyles';

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <h1>OOpppss ... Page not found 404!!</h1>
      <Link to="/">
        <Button
          background={mainColurs.brown}
          colour={mainColurs.white}
          hoverBG={mainColurs.blackLight}
        >
          Back Home
        </Button>
      </Link>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  h1 {
    font-size: 8rem;
  }
  a {
    margin-top: 1.5rem;
  }
  button {
    padding: 2rem;
  }
`;
