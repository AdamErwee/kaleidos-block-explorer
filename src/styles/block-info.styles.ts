"use client";

import styled from "styled-components";
import colors from "./colors";

export const BlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  height: 50px;
  margin: 0 10px 0 10px;
  border-bottom: 1px solid ${colors.light_grey};
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
  font-size: 15px;
  border-bottom: 1px solid ${colors.light_grey};
  padding: 10px 0;
`;

export const InfoCard = styled.div<{ readonly $header?: boolean }>`
  width: ${({ $header }) => ($header ? "30%" : "70%")};
  color: ${({ $header }) => ($header ? colors.dark_grey : colors.primary)};
`;
