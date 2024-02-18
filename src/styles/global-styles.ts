import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";

export const Header = styled.div`
  background-color: #121b2c;
  height: 50px;
  width: 100%;
`;

const GlobalStyles = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    background-color: yellow;
    font-family: sans-serif;
  }
`;

export default GlobalStyles;
