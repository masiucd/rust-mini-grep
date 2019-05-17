import styled, { createGlobalStyle } from 'styled-components';

export const colours = {
  light_green: '#7ed56f',
  medium_green: '#55c57a',
  dark_green: '#28b485',
  greenrgba1: 'rgba(126, 213, 111, 0.8)',
  greenrgba2: ' rgba(40, 180, 131, 0.8)',
  greenrgba3: ' rgba(116, 313, 111, 0.8)',
  transparentColour1: 'rgba(0,0,0,.2)',
};

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  @import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900,900i');
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #777;
  line-height: 1.7;
  padding: 30px;
}

`;
