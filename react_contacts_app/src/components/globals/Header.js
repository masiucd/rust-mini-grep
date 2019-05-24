import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colours, randomHelper } from '../../helper';

export default function Header({ branding }) {
  return (
    <HeaderWrap>
      <h4>{branding}</h4>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
        </ul>
      </Nav>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  max-height: 10vh;
  max-width: 83%;
  margin: 0 auto;
  box-shadow: 3px 2px 3px #000;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  h4 {
    font-size: 2rem;
    padding: 0.5rem;
    border-bottom: 2px solid #fefe;
    width: 20%;
  }
`;
const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      a {
        font-size: 1.2rem;
        color: #fff;
        padding: 0.2rem;
        margin-bottom: 0.3rem;
        &:hover {
          color: #333;
          background: #fff;
          transition: 0.4s;
        }
      }
    }
  }
`;
