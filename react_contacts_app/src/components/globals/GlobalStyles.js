import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*::before,
*,
*::after{

margin:0;
padding: 0;
box-sizing: inherit;

}
  body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
  }
  .pageWrapper {
    max-width: 93%;
    margin: 0 auto;
    height: 100vh;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
