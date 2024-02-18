"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr; /* Sidebar takes 1 part, rest for content */
  grid-template-rows: auto 1fr; /* Search header takes auto height, table takes rest */
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

export const SearchContainer = styled.div`
  grid-column: 2 / 3; /* Place search header on the second column */
  grid-row: 1 / 2; /* Place search header on the first row */
  background-color: #ddd;
  padding: 20px;
`;

export const TableContainer = styled.div`
  grid-column: 2 / 3; /* Place table container on the second column */
  grid-row: 2 / 3; /* Place table container on the second row */
  padding: 20px;
`;
