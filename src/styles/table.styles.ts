"use client";

import styled from "styled-components";
import colors from "./colors";

export const TableMain = styled.table`
  border-collapse: collapse;
  border: none;
`;

export const TableHead = styled.thead`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const TableData = styled.td<{ color?: string }>`
  border: none;
  font-size: 13px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ color }) => color || colors.primary};
  padding: 10px;
`;
