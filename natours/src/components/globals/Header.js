import React from 'react';
import styled from 'styled-components';
import hero from '../../img/hero.jpg';
import logo from '../../img/logo-white.png';
import { colours } from './globalstyles';

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
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right,
      ${colours.greenrgba1},
      ${colours.greenrgba2}
    ),
    url(${hero});
  background-size: cover;
  background-position: top;
  /* x y , x y, x y */
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
  .logo-box {
    position: absolute;
    top: 40px;
    left: 40px;
    .logo {
      height: 35px;
    }
  }
  .text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .heading-primary {
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      span:nth-child(1) {
        display: block;
        font-size: 3.8rem;
        font-weight: 400;
        letter-spacing: 35px;
      }
      span:nth-child(2) {
        display: block;
        font-size: 2.2rem;
        font-weight: 700;
        letter-spacing: 18px;
      }
    }
  }
`;
