"use client";

import styled from "styled-components";
import colors from "./colors.styles";

export const TableMain = styled.table`
  border-collapse: collapse;
  border: none;
`;

export const TableHead = styled.thead`
  font-size: 15px;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  width: 100%;
`;

export const TableData = styled.td<{
  color?: string;
  readonly $isClickable?: boolean;
}>`
  max-width: 200px;
  padding: 10px;
  border-bottom: 1px solid ${colors.light_grey};

  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 13px;
  color: ${({ color }) => color || colors.primary};

  &:hover {
    cursor: ${({ $isClickable }) => $isClickable && "pointer"};
  }
`;
