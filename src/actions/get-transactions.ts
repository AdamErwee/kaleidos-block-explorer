import dayjs from "dayjs";
import {
  BlockTransactionData,
  InputOutputData,
  InputOutputType,
} from "../types";
import formatNumber from "./format-number";

interface FormattedInputOutput {
  address: string;
  value: string;
  type: InputOutputType;
}

// To reduce cognitive load in the object creation below.
const getInputOutput = ({
  data,
  type,
  transactionIndex,
}: {
  data: {
    addr: string;
    value: number;
  }[];
  transactionIndex?: number;
  type: "input" | "output";
}): FormattedInputOutput[] => {
  return data?.map(({ addr, value }) => {
    // Find the Coinbase Transaction (i.e. the first transaction)
    if (transactionIndex === 0 && type === "input") {
      return {
        address: addr || "COINBASE (Newly Generated Coins)",
        value: "",
        type: "coinbase",
      };
    }

    const formattedValue = `${formatNumber(value / 10 ** 8, {
      options: { minimumFractionDigits: 8 },
    })} BTC`;

    return {
      address: addr || "Unknown", // I considered using "Unknown" rather than "OP_RETURN", but I see both are acceptable among block explorers
      type: addr ? "known" : "unknown",
      value: formattedValue,
    };
  });
};

const getTotalOutputValue = (outputArray: { value: number }[]): string => {
  let totalOutputValue = 0;

  outputArray.forEach(({ value }) => {
    totalOutputValue += value;
  });

  const formattedTotalOutputValue = `${formatNumber(
    totalOutputValue / 10 ** 8,
    {
      options: { minimumFractionDigits: 8 },
    }
  )} BTC`;

  return formattedTotalOutputValue;
};

const getTransactions = (transactions: any[]): BlockTransactionData[] => {
  const formattedTransactions: BlockTransactionData[] = [];

  transactions.forEach(({ hash, time, fee, inputs, out: outputs }, index) => {
    const formattedInput = getInputOutput({
      data: inputs.map(({ prev_out }) => prev_out),
      type: "input",
      transactionIndex: index,
    });

    const formattedOutput = getInputOutput({ data: outputs, type: "output" });

    const totalOutputValue = getTotalOutputValue(outputs);

    formattedTransactions.push({
      hash,
      timeStamp: dayjs.unix(time).format("YYYY-MM-DD HH:mm"),
      fee: `${formatNumber(fee / 10 ** 8, {
        options: { minimumFractionDigits: 8 },
      })} BTC`,
      inputs: formattedInput,
      outputs: formattedOutput,
      totalOutputValue: totalOutputValue,
    });
  });

  return formattedTransactions;
};

export default getTransactions;
