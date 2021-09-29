import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    font-size: 12px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    background-color: #212121;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    color: #ffffff;
  }
`;

export default GlobalStyle;
