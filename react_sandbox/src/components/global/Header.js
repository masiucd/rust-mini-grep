import { Link } from 'react-router-dom';
import { Javascript } from 'styled-icons/boxicons-logos/Javascript';
import styled from 'styled-components';
import React, { useState } from 'react';
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight';
import { mediaMin, mediaMax } from '../../styles';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showMobileMenu = () => {
    setToggle(!toggle);
  };
  return (
    <Nav>
      <Javascript size="60" />
      <ul className={toggle ? 'larger-bg' : ''}>
        <MenuAltRight
          size="45"
          id="menu-icon"
          className="menu-icon-mobile"
          onClick={showMobileMenu}
        />
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
        <li>
          <Link to="/todolist">Todo list</Link>
        </li>
      </ul>

      {toggle ? (
        <div className="nav-list-mobile">
          <Link to="/">Home</Link>

          <Link to="/diceroller">DiceRoller</Link>

          <Link to="/iconlist">IconList</Link>

          <Link to="/ballgame">Lottery</Link>

          <Link to="/coinflipper">CoinFlipper</Link>

          <Link to="/colours">Colurs</Link>

          <Link to="/events">Events</Link>

          <Link to="/buttonlist">Button list</Link>

          <Link to="/numberlist">Number list</Link>

          <Link to="/todolist">Todo list</Link>
        </div>
      ) : (
        ''
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  margin-bottom: 2rem;
  position: relative;
  ul {
    display: flex;
    justify-content: flex-end;

    #menu-icon {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 50px;
      display: none;
      ${mediaMax.tablet`
      flex-direction:column;
      display: block;
      cursor: pointer;
     `}
    }

    li {
      margin: 0 1rem;
      ${mediaMax.tablet`
      flex-direction:column;
      display: none;
     `}
      a {
        font-size: 1.2rem;
        color: #fff;
      }
    }
  }
  .nav-list-mobile {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 30px;
    right: 50px;
    ${mediaMin.tablet`
      display: none;
     `}
    a {
      font-size: 2em;
      color: #000;
      &:hover {
        transition: all 0.3s linear;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }
  .larger-bg {
    height: 22em;
  }
`;
