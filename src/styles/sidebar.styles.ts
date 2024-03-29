"use client";

import styled from "styled-components";
import colors from "./colors.styles";

interface ChainProps {
  readonly $activeChain?: boolean;
}

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px;
  width: 25%;
`;

export const ChainsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Chain = styled.div<ChainProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ $activeChain }) => $activeChain && colors.light_grey};

  &:hover {
    cursor: pointer;
    background-color: ${({ $activeChain }) =>
      !$activeChain && colors.lightest_grey};
  }
`;

export const ChainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;



