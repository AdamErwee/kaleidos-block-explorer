"use client";

import styled from "styled-components";
import colors from "./colors.styles";
import { BlockInfoData } from "../types";

export const BlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  height: 50px;
  margin: 0 10px 0 10px;
  border-bottom: 1px solid ${colors.light_grey};
`;

export const ReturnCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-left: auto; // Ensuring that the ReturnCard is far right of the header
  font-size: 15px;
  color: ${colors.link_blue};

  &:hover {
    cursor: pointer;
  }
`;

export const BlockSubHeader = styled.span`
  margin: 5px 10px 0 10px;
  font-size: 12px;
  font-weight: bold;
  color: ${colors.dark_grey};
`;

export const BlockPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  margin: 30px 10px 10px 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${colors.light_grey};
  padding: 10px 0;
`;

const typeColorLookup = {
  header: colors.dark_grey,
  miner: colors.link_blue,
};

export const InfoCard = styled.div<{
  type: keyof BlockInfoData;
}>`
  font-size: ${({ type }) => (type === "header" ? "13px" : "15px")};
  font-weight: ${({ type }) => type === "header" && "600"};

  width: ${({ type }) => (type === "header" ? "30%" : "70%")};
  color: ${({ type }) => typeColorLookup[type] || colors.primary};
`;
