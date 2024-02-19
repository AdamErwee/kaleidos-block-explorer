import { StaticImageData } from "next/image";

export interface ChainInfo {
  name: string;
  symbol: string;
  apiReference: string;
  icon: StaticImageData;
  currencyPair: string; // Example: 'BTC-USD'
  currentPrice?: number;
}

export interface LatestBlockData {
  height: number;
  hash: string;
  minedTime: string;
  miner: string;
  size: string;
}
