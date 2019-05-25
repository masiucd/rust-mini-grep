import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainColurs } from '../global/Globalstyles';
import { Container } from '../global/grid';

const Header = ({ title }) => {
  const app = 'ss';
  return (
    <HeaderWrap>
      <Container>
        <h4>{title}</h4>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  background: ${mainColurs.goldenBrown};
  color: ${mainColurs.white};
  max-height: 8rem;
  h4 {
    font-size: 2.6rem;
    padding: 0.5rem;
    margin-left: 16rem;
    position: relative;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      padding: 0.5rem;
      margin-right: 0.5rem;
      a {
        color: ${mainColurs.white};
        font-size: 1.7rem;
        position: absolute;
        top: 17px;
        right: 30px;
        &:hover {
          transition: all ease-in-out 0.3s;
          color: ${mainColurs.blackLight};
          border-radius: 1rem;
        }
      }
    }
  }
`;

export default Header;
