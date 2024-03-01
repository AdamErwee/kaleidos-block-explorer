import { StaticImageData } from "next/image";

// Chains used in the app (by symbol)
type ValidChain = "btc" | "eth" | "bch";

// Used to determine styling on Transaction input/output types
type InputOutputType = "coinbase" | "known" | "unknown";

// Chain Info used on the Block Explorer page
interface ChainInfo {
  name: string;
  symbol: ValidChain;
  apiReference: string;
  icon: StaticImageData;
  currencyPair: string; // Example: 'BTC-USD'
  currentPrice?: string;
  searchable?: boolean;
}

// Formatted latest block data used on the Block Explorer (i.e. latest block) table
interface LatestBlockData {
  height: number;
  hash: string;
  minedTime: string;
  miner: string;
  size: string;
  searchable?: boolean;
}

// Describes the type for transaction data/response returned by blockchain.com's API
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

interface InputOutputData {
  type: InputOutputType;
  address: string;
  value: string;
}
// The formatted Transactions data used on the Block Transactions component
interface BlockTransactionData {
  hash: string;
  timeStamp: string;
  fee: string;
  totalOutputValue: string;
  inputs: InputOutputData[];
  outputs: InputOutputData[];
}

// Describes the type for a specific Block's data/response returned by blockchain.com's API
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

// Formatted Block Info data used on the Block screen's info section
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
  header?: string;
}


