"use client";

import React from "react";
import {
  Chain,
  ChainTextContainer,
  ChainsContainer,
  SidebarContainer,
} from "../styles/sidebar.styles";
import { ChainInfo } from "../types/chainInfo";
import Image from "next/image";
import { MainText, SubText } from "../styles/global-styles";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  chains: ChainInfo[];
}

const Sidebar: React.FC<SidebarProps> = ({ chains }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarContainer>
      <h2>Block Explorer</h2>
      <ChainsContainer>
        {chains.map(({ name, icon, currentPrice, abbreviation }) => {
          return (
            <Chain
              key={`${name}-list-item`}
              $activeChain={pathname.includes(abbreviation)}
              onClick={() => router.push(`/block-explorer/${abbreviation}`)}
            >
              <Image src={icon} alt={`${name}-icon`} width={40} height={40} />
              <ChainTextContainer>
                <MainText>{name}</MainText>
                <SubText>${currentPrice}</SubText>
              </ChainTextContainer>
            </Chain>
          );
        })}
      </ChainsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
