import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    color: #555;
    background-color: #f0f0f0;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #3498db;
  }
`;

export default GlobalStyle;