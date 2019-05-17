import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from '../styles/header';
import logo from '../../img/logo-white.png';
import { moveLeft, moveRight, bottomUpp } from '../../styles';

export default function Header() {
  return (
    <HeaderWrap>
      <div className="logo-box">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span>outdoors</span>
          <span>is where life starts</span>
        </h1>
        <Link to="/" className="btn btn-white animated">
          {' '}
          Discover Our Tours
        </Link>
      </div>
    </HeaderWrap>
  );
}
