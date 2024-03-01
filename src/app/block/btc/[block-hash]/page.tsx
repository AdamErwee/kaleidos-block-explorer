"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { BlockInfoData, BlockTransactionData } from "../../../../types";
import getBlock from "../../../../api/get-block";
import {
  PageContainer,
  TransactionsPageContainer,
} from "../../../../styles/block-layout.styles";
import BlockTransactions from "../../../../components/block-transactions";
import BlockInfo from "../../../../components/block-info";

export default function BlockPage({
  params,
}: {
  params: { "block-hash": string };
}) {
  const hash = params["block-hash"];
  const [block, setBlock] = useState<BlockInfoData | null>(null);
  const [transactions, setTransactions] = useState<
    BlockTransactionData[] | null
  >(null);

  useEffect(() => {
    getBlock(hash).then(({ blockInfo, blockTransactions }) => {
      setBlock(blockInfo);
      setTransactions(blockTransactions);
    });
  }, []);

  return (
    <PageContainer>
      <BlockInfo infoData={block} />
      <h2>Transactions</h2>
      {!block ? (
        <Skeleton
          containerClassName="flex-1"
          wrapper={TransactionsPageContainer}
        />
      ) : (
        <TransactionsPageContainer>
          <BlockTransactions transactions={transactions} />
        </TransactionsPageContainer>
      )}
    </PageContainer>
  );
}
