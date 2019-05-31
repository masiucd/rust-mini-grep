import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Home } from 'styled-icons/fa-solid/Home';
import { AddBox } from 'styled-icons/material/AddBox';
import { InfoCircle } from 'styled-icons/boxicons-regular/InfoCircle';
import { colours } from '../../styles/globalStyles';

const Header = () => (
  <HeaderWrapper>
    <h3>
      {' '}
      Contact<span> Manager</span> Application{' '}
    </h3>
    <nav>
      <ul>
        <li>
          <Link to="/">
            {' '}
            <Home size="35" />{' '}
          </Link>
        </li>
        <li>
          <Link to="/contact/add">
            {' '}
            <AddBox size="35" />{' '}
          </Link>
        </li>
        <li>
          <Link to="/about">
            {' '}
            <InfoCircle size="35" />{' '}
          </Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
);

export default Header;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  h3 {
    font-size: 3rem;
    padding: 2rem;
    span {
      color: ${colours.yellowL};
    }
  }
  nav {
    width: 90%;
    ul {
      display: flex;
      justify-content: flex-end;
      li {
        padding: 0.5rem;

        a {
          text-decoration: none;
          color: ${colours.blueDark};
          font-size: 2.4rem;
          transition: all 0.2s;
          &:hover {
            transition: all 0.2s;
            color: ${colours.grey};
          }
        }
      }
    }
  }
`;
