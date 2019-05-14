import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #fefede;
  font-size: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


ul{
  list-style: none;
}
a{
  text-decoration: none;
}

h1{
  font-size: 6em;
}
h2{
  font-size: 5.4em;
}
h3{
  font-size: 4.5em;
}
h4{
  font-size: 3.8em;
}

p{
  font-size: 18px;
}

`;

export const AppWrapper = styled.main`
  min-heigt: 100vh;
`;
