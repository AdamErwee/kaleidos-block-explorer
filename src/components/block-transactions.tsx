import { FaArrowAltCircleRight, FaGlobe } from "react-icons/fa";
import {
  AddressValueRow,
  InfoCell,
  InfoRow,
  TotalValueCard,
  TransactionCard,
  TransactionsContainer,
} from "../styles/block-transactions.styles";
import {
  BlockTransactionData,
  InputOutputData,
  InputOutputType,
} from "../types";
import colors from "../styles/colors.styles";

interface BlockTransactionsProps {
  transactions: BlockTransactionData[] | null;
}

const addressColorLookup: Record<InputOutputType, string> = {
  coinbase: colors.light_green,
  known: colors.link_blue,
  unknown: colors.primary,
};

// This function reduces cognitive load downstream. It gets an array (input/output) and returns a row with the address and value with its relevant styling
const getInputOutput = (dataType: string, data: InputOutputData[]) => {
  return data.map((item, index) => {
    const key = `${index}_${item.address}_${item.value}`;
    const iconColor =
      dataType === "input" ? colors.link_blue : colors.light_green;

    return (
      <AddressValueRow key={key}>
        <p
          key={`${key}-address`}
          style={{ color: addressColorLookup[item.type], maxWidth: "70%" }}
        >
          {item.address}
        </p>
        {item.type !== "coinbase" && (
          <p key={`${key}-value`}>
            {item.value}
            <FaGlobe size={12} color={iconColor} />
          </p>
        )}
      </AddressValueRow>
    );
  });
};

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
                    <InfoCell width="80%" $cellType="hash">
                      {hash}
                    </InfoCell>
                    <InfoCell width="10%">{timeStamp}</InfoCell>
                  </InfoRow>
                  <InfoRow key={`address-row-${hash}`}>
                    <InfoCell width="10%"></InfoCell>
                    <InfoCell width="40%" $cellType="address">
                      {getInputOutput("input", inputs)}
                    </InfoCell>
                    <InfoCell width="10%" $cellType="centered">
                      <FaArrowAltCircleRight
                        size={30}
                        color={colors.light_green}
                      />
                    </InfoCell>
                    <InfoCell width="40%">
                      {getInputOutput("output", outputs)}
                    </InfoCell>
                  </InfoRow>
                  <InfoRow key={`fee-row-${hash}`}>
                    <InfoCell width="10%" $cellType="header">
                      Fee
                    </InfoCell>
                    <InfoCell width="78%">{fee}</InfoCell>
                    <InfoCell width="12%" $cellType="centered">
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
