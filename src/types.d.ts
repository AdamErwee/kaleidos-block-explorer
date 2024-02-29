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


type Transaction = {
  inputs: {
    script: string;
    prev_out: {
      address: string;
      value: number;
    };
  }[];
  out: {
    type: "coinbase" | "known" | "unknown";
    address: string;
    value: number;
  }[];
};

interface BlockResponseData {
  bits: number;
  block_index: number;
  fee: number;
  hash: string;
  height: number;
  main_chain: boolean;
  mrkl_root: string;
  n_tx: number;
  next_block: string;
  nonce: number;
  prev_block: string;
  size: number;
  time: number;
  tx: Transaction[];
  ver: number;
  weight: number;
}

interface BlockInfoData {
  hash: string;
  confirmations: string;
  timestamp: string;
  height: number;
  miner: string;
  numberOfTransactions: string;
  difficulty: string;
  merkleRoot: string;
  version: string;
  bits: string;
  weight: string;
  size: string;
  nonce: string;
  transactionVolume: string;
  blockReward: string;
  feeReward: string;
}

type InputOutputType = "coinbase" | "known" | "unknown";
interface BlockTransactionData {
  hash: string;
  timeStamp: string;
  fee: string;
  totalOutputValue: string;
  inputs: {
    type: InputOutputType;
    address: string;
    value: string;
  }[];
  outputs: {
    type: InputOutputType;
    address: string;
    value: string;
  }[];
}

interface MiningPool {
  id: number;
  name: string;
  addresses: string[];
  tags: string[];
  link: string;
}

type CellType = "icon" | "header" | "address" | "hash";





