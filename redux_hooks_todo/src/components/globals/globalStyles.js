import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*::before,
*,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 10px;
}
  body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #fefe;
    min-height: 100vh;
  }
`;

export const PageWrapper = styled.div`
  max-width: 97%;
  margin: 0 auto;
  -webkit-box-shadow: 38px 53px 89px -16px rgba(0, 0, 0, 0.9);
  -moz-box-shadow: 38px 53px 89px -16px rgba(0, 0, 0, 0.9);
  box-shadow: 38px 53px 89px -16px rgba(0, 0, 0, 0.9);
`;
