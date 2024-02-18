import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";
import colors from "./colors";

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

  h1 {
    margin: 0 0 30px 0;
    color: ${colors.primary};
  }
`;

export const Header = styled.div`
  background-color: #121b2c;
  height: 50px;
  width: 100%;
`;

export const MainText = styled.span`
  font-weight: bold;
  color: ${colors.primary};
`;

export const SubText = styled.span`
  font-weight: bold;
  color: ${colors.dark};
`;

export default GlobalStyles;
