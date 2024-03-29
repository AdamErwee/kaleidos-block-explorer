import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";
import colors from "./colors.styles";

const GlobalStyles = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-width: 1050px;
    overflow-x: auto;
    overflow-y: auto;
    font-family: sans-serif;
  }

  h1, h2, h3 {
    margin: 0;
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
  color: ${colors.dark_grey};
`;

export default GlobalStyles;
