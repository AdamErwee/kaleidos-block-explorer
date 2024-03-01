"use client";

import React from "react";
import { ChainInfo } from "../types";
import {
  Chain,
  ChainTextContainer,
  ChainsContainer,
  SidebarContainer,
} from "../styles/sidebar.styles";
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
        {chains.map(({ name, icon, currentPrice, symbol }) => {
          return (
            <Chain
              key={`${name}-list-item`}
              $activeChain={pathname.includes(symbol)}
              onClick={() => router.push(`/block-explorer/${symbol}`)}
            >
              <Image
                src={icon}
                alt={`${name}-icon`}
                width={40}
                height={40}
                priority // Added this due to a warning on the size. This indicates to Next.js that the image is important for the initial rendering of the page, and it should be prioritized for loading.
              />
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
