"use client";

import axios from "axios";
import {
  BlockInfoData,
  BlockResponseData,
  BlockTransactionData,
} from "../types";
import getBlockInfo from "../actions/get-block-info";
import getTransactions from "../actions/get-transactions";

interface BlockProps {
  blockInfo: BlockInfoData;
  blockTransactions: BlockTransactionData[];
}

const getBlock = async (hash: string): Promise<BlockProps> => {
  try {
    const response = await axios.get<BlockResponseData>(
      `https://blockchain.info/rawblock/${hash}`
    );

    const blockInfo = await getBlockInfo(response.data);
    const blockTransactions = getTransactions(response.data.tx);

    return { blockInfo, blockTransactions };
  } catch (error) {
    console.error(`Error fetching block data: ${error}`);
    throw error;
  }
};

export default getBlock;
