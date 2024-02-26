import { StaticImageData } from "next/image";

export interface ChainInfo {
  name: string;
  symbol: string;
  apiReference: string;
  icon: StaticImageData;
  currencyPair: string; // Example: 'BTC-USD'
  currentPrice?: number;
  searchable?: boolean;
}

export interface LatestBlockData {
  height: number;
  hash: string;
  minedTime: string;
  miner: string;
  size: string;
}

interface BlockTransaction {
  // Define the structure of a transaction.
  // This is a placeholder. You should adjust the interface based on the actual transaction structure.
  hash: string;
  // Add other fields as necessary based on the transaction structure.
}

interface BlockResponse {
  hash: string;
  ver: number;
  prev_block: string;
  mrkl_root: string;
  time: number;
  bits: number;
  nonce: number;
  n_tx: number;
  size: number;
  block_index: number;
  main_chain: boolean;
  height: number;
  received_time: number;
  relayed_by: string;
  tx: BlockTransaction[]; // Assuming each transaction is an object. Adjust as necessary.
}
