import { Transaction } from "../types";

const determineTransactionVolumeAndReward = ({
  transactions,
  fee,
}: {
  transactions: Transaction[];
  fee: number;
}): { transactionVolume: number; blockReward: number } => {
  let inputValue = 0;
  let outputValue = 0;

  transactions.forEach((transaction) => {
    transaction.inputs.forEach((input) => {
      inputValue += input.prev_out.value;
    });
    transaction.out.forEach((output) => {
      outputValue += output.value;
    });
  });

  const transactionVolume = (inputValue - fee) / 10 ** 8;

  const blockReward = (outputValue - inputValue) / 10 ** 8;

  return { transactionVolume, blockReward };
};

export default determineTransactionVolumeAndReward;
