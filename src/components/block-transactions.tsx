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
  return (
    <TransactionsContainer>
      {testCards.map((test) => {
        return <TransactionCard />; // TODO: add key
      })}
    </TransactionsContainer>
  );
};

export default BlockTransactions;
