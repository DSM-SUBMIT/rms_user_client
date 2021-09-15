import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
  }
`;

export default global;
