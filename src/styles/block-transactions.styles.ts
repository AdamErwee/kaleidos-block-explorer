"use client";

import styled from "styled-components";
import colors from "./colors";
import { CellType } from "../types";

export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
`;

export const TransactionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 200px;
  padding: 10px 10px;
  border-bottom: 1px solid ${colors.light_grey};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const cellTypeColorLookup = {
  icon: colors.light_green,
  header: colors.dark_grey,
  hash: colors.link_blue,
  address: colors.link_blue,
};

export const TotalValueCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 5px;
  border-radius: 3px;
  background-color: ${colors.lightest_green};
  font-weight: bold;
  color: ${colors.light_green};
`;

export const AddressValueRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: aliceblue;
`;

export const InfoCell = styled.div<{
  width?: string;
  readonly $cellType?: CellType;
}>`
  display: ${({ $cellType }) => $cellType === "icon" && "flex"};
  justify-content: ${({ $cellType }) =>
    $cellType === "icon" ? "center" : "unset"};
  align-items: ${({ $cellType }) =>
    $cellType === "icon" ? "center" : "unset"};

  min-height: 100%;
  min-width: ${({ width }) => width || "100%"};

  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ $cellType }) => ($cellType === "header" ? "13px" : "15px")};
  font-weight: ${({ $cellType }) => $cellType === "header" && "600"};
  color: ${({ $cellType }) =>
    $cellType ? cellTypeColorLookup[$cellType] : colors.primary};

  & > p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px 0 0;

    & > svg {
      align-self: center;
      padding: 0 0 0 5px;
    }
  }
`;









