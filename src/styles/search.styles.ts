"use client";

import styled from "styled-components";
import colors from "./colors.styles";

interface InputProps {
  readonly $isValid?: boolean;
}

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 10px 30px 10px 10px;
  background-color: ${colors.light_grey};
  border: 1px solid
    ${({ $isValid }) => (!$isValid ? colors.error : colors.light_grey)};
  border-radius: 5px;
  color: ${colors.dark_grey};
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  background: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${colors.dark_grey};
  }
`;
