"use client";

import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const TableData = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
`;
