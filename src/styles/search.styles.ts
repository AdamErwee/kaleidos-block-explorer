"use client";

import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  background-color: green;
  padding: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 10px 30px 10px 10px;
  background-color: #eff0f5;
  border: 1px solid #717784;
  border-radius: 5px;
  color: #717784;
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  ::placeholder {
    color: #717784;
  }
`;
