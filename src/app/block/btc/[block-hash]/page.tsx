"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { BlockResponse } from "../../../../types";
import getBlock from "../../../../api/get-block";
import {
  BlockPageContainer,
  PageContainer,
  TransactionsPageContainer,
} from "../../../../styles/block-layout.styles";
import BlockTransactions from "../../../../components/block-transactions";

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
  }, []);

  return (
    <PageContainer>
      {!block ? (
        <Skeleton containerClassName="flex-1" wrapper={BlockPageContainer} />
      ) : (
        <BlockPageContainer>Block Container</BlockPageContainer>
      )}
      <h2>Transactions</h2>
      {!block ? (
        <Skeleton
          containerClassName="flex-1"
          wrapper={TransactionsPageContainer}
        />
      ) : (
        <TransactionsPageContainer>
          <BlockTransactions message="test" />
        </TransactionsPageContainer>
      )}
    </PageContainer>
  );
}
