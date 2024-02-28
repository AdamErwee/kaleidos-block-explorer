"use client";

import axios from "axios";
import { BlockInfoData, BlockResponseData } from "../types";
import getBlockInfo from "../actions/get-block-info";

const getBlock = async (hash: string): Promise<BlockInfoData> => {
  try {
    const response = await axios.get<BlockResponseData>(
      `https://blockchain.info/rawblock/${hash}`
    );

    console.log("response: ", response.data);

    const blockInfo = getBlockInfo(response.data);
    return blockInfo;
  } catch (error) {
    console.error(`Error fetching block data: ${error}`);
    throw error;
  }
};

export default getBlock;
