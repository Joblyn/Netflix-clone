import { createGlobalStyle } from 'styled-components';

export const GlobalStyles  = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Helvetica,  Arial, sans-serif;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000 !important;
    color: #333;
    font-size: 16px;
  }
`;