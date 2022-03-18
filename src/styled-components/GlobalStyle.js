import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 1406px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    background: linear-gradient(
      116.58deg, #5A2782 0%, #7A1F9A 29.33%,
      #4939A7 60.02%, #0B7FB0 79.47%);
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export { GlobalStyle };
