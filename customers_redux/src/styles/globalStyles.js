import { createGlobalStyle } from 'styled-components';

export const colours = {
  blueDark: '#010326',
  yellowL: '#F2E52E',
  yellowD: '#F2CF1D',
  yellowDD: '#F2BC1B',
  grey: '#8C8C8C',
};

export const GlobalStyle = createGlobalStyle`
  *::before,
  *::after,
  *{
    margin: 0;
    padding: 0;
    box-sizing: inherit
  }
  html{
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body{
    box-sizing: border-box;
    height: 100vh;
    color: #fefefe;
    background: linear-gradient(80deg, ${colours.blueDark} 0%,${
  colours.blueDark
} 50%,${colours.blueDark} 50%,${colours.yellowDD} 50%,${
  colours.yellowD
} 100%); /* W3C */

  }
`;
