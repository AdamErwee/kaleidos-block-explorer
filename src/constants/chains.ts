import { ChainInfo } from "../types";

import bitcoinIcon from "../../public/icons/bitcoin.png";
import ethereumIcon from "../../public/icons/ethereum.png";
import bitcoinCashIcon from "../../public/icons/bitcoin-cash.png";

export const CHAINS: ChainInfo[] = [
  {
    name: "Bitcoin",
    symbol: "btc",
    apiReference: "bitcoin",
    icon: bitcoinIcon,
    currencyPair: "BTC-USD",
  },
  {
    name: "Ethereum",
    symbol: "eth",
    apiReference: "ethereum",
    icon: ethereumIcon,
    currencyPair: "ETH-USD",
  },
  {
    name: "Bitcoin Cash",
    symbol: "bch",
    apiReference: "bitcoin-cash",
    icon: bitcoinCashIcon,
    currencyPair: "BCH-USD",
  },
];
