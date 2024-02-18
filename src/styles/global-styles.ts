import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";

export const Header = styled.div`
  background-color: #121b2c;
  height: 50px;
  width: 100%;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
