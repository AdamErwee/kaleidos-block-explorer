import { FaArrowAltCircleRight, FaGlobe } from "react-icons/fa";
import {
  InfoCell,
  InfoRow,
  TotalValueCard,
  TransactionCard,
  TransactionsContainer,
} from "../styles/block-transactions.styles";
import { BlockTransactionData, InputOutputType } from "../types";
import colors from "../styles/colors";

interface BlockTransactionsProps {
  transactions: BlockTransactionData[] | null;
}

const addressColorLookup: Record<InputOutputType, string> = {
  coinbase: colors.light_green,
  known: colors.link_blue,
  unknown: colors.primary,
};

const getInputOutput = (dataType, data) => {
  return data.map((item, index) => {
    const key = `${index}_${item.address}_${item.value}`;

    if (dataType === "address" && item.address) {
      return (
        <p key={key} style={{ color: addressColorLookup[item.type] }}>
          {item.address}
        </p>
      );
    }

    const iconColor =
      dataType === "input-value" ? colors.link_blue : colors.light_green;

    return (
      <p key={key}>
        {item.value}
        {item.value && <FaGlobe size={12} color={iconColor} />}
      </p>
    );
  });
};

const test = [
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
];

const BlockTransactions: React.FC<BlockTransactionsProps> = ({
  transactions,
}) => {
  return (
    <TransactionsContainer>
      {!transactions
        ? "...Loading"
        : transactions.map(
            ({ hash, timeStamp, fee, inputs, outputs, totalOutputValue }) => {
              return (
                <TransactionCard key={hash}>
                  <InfoRow key={`hash-row-${hash}`}>
                    <InfoCell width="10%" $cellType="header">
                      Hash
                    </InfoCell>
                    <InfoCell width="37.5%" $cellType="hash">
                      {hash}
                    </InfoCell>
                    <InfoCell width="10%"></InfoCell>
                    <InfoCell width="27.5%"></InfoCell>
                    <InfoCell width="15%">{timeStamp}</InfoCell>
                  </InfoRow>
                  <InfoRow key={`address-row-${hash}`}>
                    <InfoCell width="10%"></InfoCell>
                    <InfoCell width="22.5%" $cellType="address">
                      {getInputOutput("address", inputs)}
                    </InfoCell>
                    <InfoCell width="15%">
                      {getInputOutput("input-value", inputs)}
                    </InfoCell>
                    <InfoCell width="10%" $cellType="icon">
                      <FaArrowAltCircleRight
                        size={30}
                        color={colors.light_green}
                      />
                    </InfoCell>
                    <InfoCell width="42.5%">
                      {/* {getInputOutput("address", outputs)} */}
                      {/* {getInputOutput("output-value", outputs)} */}
                    </InfoCell>
                  </InfoRow>
                  <InfoRow key={`fee-row-${hash}`}>
                    <InfoCell width="10%" $cellType="header">
                      Fee
                    </InfoCell>
                    <InfoCell width="37.5%">{fee}</InfoCell>
                    <InfoCell width="10%"></InfoCell>
                    <InfoCell width="27.5%"></InfoCell>
                    <InfoCell width="15%">
                      <TotalValueCard>{totalOutputValue}</TotalValueCard>
                    </InfoCell>
                  </InfoRow>
                </TransactionCard>
              );
            }
          )}
    </TransactionsContainer>
  );
};

export default BlockTransactions;
