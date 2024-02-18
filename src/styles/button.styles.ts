"use client";

import styled from "styled-components";

export const ButtonContainer = styled.button<{ backgroundColor?: string }>`
  padding: 10px 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#7EAFF1"};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ backgroundColor }) =>
      backgroundColor
        ? `darken(0.1, backgroundColor)`
        : `darken(0.1, "#7EAFF1")`};
  }
`;
