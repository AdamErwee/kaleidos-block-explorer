import axios from "axios";
import { BlockInfoData, BlockResponseData } from "../types";
import dayjs from "dayjs";
import determineMiner from "./determine-miner";
import determineTransactionVolume from "./determine-transaction-volume";

const getBlockInfo = async (
  referenceBlock: BlockResponseData
): Promise<BlockInfoData> => {
  const {
    hash,
    height,
    time,
    n_tx: numberOfTransactions,
    mrkl_root,
    ver,
    bits,
    weight,
    size,
    nonce,
    tx,
    fee,
  } = referenceBlock;
  try {
    // Fetch latest block information
    const response = await axios.get<BlockResponseData>(
      "https://blockchain.info/latestblock"
    );

    const latestBlock = response.data;

    const { transactionVolume, blockReward } = determineTransactionVolume({
      transactions: tx,
      fee,
    });

    const feeReward = fee / 10 ** 8;

    return {
      hash: hash,
      confirmations: latestBlock.height - height + 1,
      timestamp: dayjs.unix(time).format("YYYY-MM-DD HH:mm"),
      height: height,
      miner: determineMiner(referenceBlock),
      numberOfTransactions: numberOfTransactions.toLocaleString(),
      difficulty: referenceBlock.bits.toLocaleString(), // TODO: calculate the difficulty
      merkleRoot: mrkl_root,
      version: ver,
      bits: bits.toLocaleString(),
      weight: `${weight.toLocaleString()} WU`,
      size: `${size.toLocaleString()} bytes`,
      nonce: nonce.toLocaleString(),
      transactionVolume: `${transactionVolume.toLocaleString("en-US", {
        maximumFractionDigits: 10,
      })} BTC`,
      blockReward: `${blockReward.toLocaleString()} BTC`,
      feeReward: `${feeReward.toLocaleString()} BTC`,
    };
  } catch (error) {
    console.error("Error fetching latest block information:", error);
    throw error;
  }
};

export default getBlockInfo;
