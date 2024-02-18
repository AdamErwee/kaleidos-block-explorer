import axios from "axios";

import { ChainInfo } from "../types/chainInfo";

import bitcoinIcon from "../../public/icons/bitcoin.png";
import ethereumIcon from "../../public/icons/ethereum.png";
import bitcoinCashIcon from "../../public/icons/bitcoin-cash.png";

export const getChains = async (): Promise<ChainInfo[]> => {
  try {
    const exchangeTickers = await axios.get<any>(
      `https://api.blockchain.com/v3/exchange/tickers`
    );

    const bitcoinTickerData = exchangeTickers.data.find(
      ({ symbol }) => symbol === "BTC-USD"
    );
    const ethereumTickerData = exchangeTickers.data.find(
      ({ symbol }) => symbol === "ETH-USD"
    );
    const bitcoinCashTickerData = exchangeTickers.data.find(
      ({ symbol }) => symbol === "BCH-USD"
    );

    const chains: ChainInfo[] = [
      {
        name: "Bitcoin",
        apiReference: "bitcoin",
        abbreviation: "btc",
        icon: bitcoinIcon,
        currentPrice: bitcoinTickerData.price_24h,
      },
      {
        name: "Ethereum",
        apiReference: "ethereum",
        abbreviation: "eth",
        icon: ethereumIcon,
        currentPrice: ethereumTickerData.price_24h,
      },
      {
        name: "Bitcoin Cash",
        apiReference: "bitcoin-cash",
        abbreviation: "bch",
        icon: bitcoinCashIcon,
        currentPrice: bitcoinCashTickerData.price_24h,
      },
    ];

    return chains;
  } catch (error) {
    console.error("Error fetching chain information:", error);
    throw error;
  }
};

export default getChains;
