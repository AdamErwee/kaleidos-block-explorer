"use client";

import styled from "styled-components";
import colors from "./colors";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  margin: 0 0 30px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 10px 30px 10px 10px;
  background-color: ${colors.light};
  border: 1px solid ${colors.light};
  border-radius: 5px;
  color: ${colors.dark};
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${colors.dark};
  }
`;
