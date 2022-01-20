import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  
  body {
    position: relative;
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    width: 100%;
    background-color: #F7FCFF;
  }
`

export default GlobalStyle;