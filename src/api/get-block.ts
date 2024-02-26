"use client";

import axios from "axios";
import { BlockResponse } from "../types";

async function getBlock(hash: string): Promise<BlockResponse> {
  try {
    const response = await axios.get<BlockResponse>(
      `https://blockchain.info/rawblock/${hash}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching block data: ${error}`);
    throw error;
  }
}

export default getBlock;
