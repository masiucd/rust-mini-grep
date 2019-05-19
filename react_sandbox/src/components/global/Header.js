import { Link } from 'react-router-dom';
import { Javascript } from 'styled-icons/boxicons-logos/Javascript';
import styled from 'styled-components';
import React from 'react';

export default function Header() {
  return (
    <Nav>
      <Javascript size="60" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/diceroller">DiceRoller</Link>
        </li>
        <li>
          <Link to="/iconlist">IconList</Link>
        </li>
        <li>
          <Link to="/ballgame">Lottery</Link>
        </li>
        <li>
          <Link to="/coinflipper">CoinFlipper</Link>
        </li>
        <li>
          <Link to="/colours">Colurs</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/buttonlist">Button list</Link>
        </li>
        <li>
          <Link to="/numberlist">Number list</Link>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem;
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      margin: 0 1rem;
      a {
        font-size: 1.2rem;
        color: #fff;
      }
    }
  }
`;
