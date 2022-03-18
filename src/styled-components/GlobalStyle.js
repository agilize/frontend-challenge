import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 1406px;
    padding: 0;
    margin: 0;

    background: linear-gradient(
      116.58deg, #5A2782 0%, #7A1F9A 29.33%,
      #4939A7 60.02%, #0B7FB0 79.47%);
    
    background-repeat: no-repeat;

    @media(max-width: 1096px) {
      height: 2812px;
    }
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export { GlobalStyle };
