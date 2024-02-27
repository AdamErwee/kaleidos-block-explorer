import React from "react";
import {
  TransactionCard,
  TransactionsContainer,
} from "../styles/block-transactions.styles";

interface BlockTransactionsProps {
  message: string;
}

const testCards = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const BlockTransactions: React.FC<BlockTransactionsProps> = ({ message }) => {
  console.log("message: ", message);
  return (
    <TransactionsContainer>
      {testCards.map((test) => {
        return <TransactionCard />;
      })}
    </TransactionsContainer>
  );
};

export default BlockTransactions;
