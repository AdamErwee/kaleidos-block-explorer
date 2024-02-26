"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { BlockResponse } from "../../../../types";
import getBlock from "../../../../api/get-block";
import {
  BlockInfoContainer,
  PageContainer,
  TransactionsContainer,
} from "../../../../styles/block-layout.styles";

export default function BlockPage({
  params,
}: {
  params: { "block-hash": string };
}) {
  const hash = params["block-hash"];
  const [block, setBlock] = useState<BlockResponse | null>(null);
  console.log("block: ", block);

  useEffect(() => {
    getBlock(hash)
      .then((data) => setBlock(data))
      .catch((error) => console.error(error));
  }, [hash]); // Depend on the hash to refetch if it changes

  return (
    <PageContainer>
      <BlockInfoContainer>
        {!block ? <Skeleton /> : "Block Container"}
      </BlockInfoContainer>
      <h2>Transactions</h2>
      <TransactionsContainer>
        {!block ? <Skeleton /> : "Transactions Container"}
      </TransactionsContainer>
    </PageContainer>
  );
}
