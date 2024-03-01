import axios from "axios";
import { ChainInfo } from "../types";
import { CHAINS } from "../constants/chains";
import { toast } from "react-toastify";

export const getChainPrices = async (): Promise<ChainInfo[]> => {
  try {
    const exchangeTickers = await axios.get<any>(
      `https://api.blockchain.com/v3/exchange/tickers`
    );

    const chains: ChainInfo[] = CHAINS.map((chain) => {
      const tickerData = exchangeTickers.data.find(
        ({ symbol }) => symbol === chain.currencyPair
      );

      return {
        ...chain,
        currentPrice: tickerData.price_24h,
      };
    });

    return chains;
  } catch (error) {
    toast.error(`Siesa! There was an error fetching the chain prices.`);
    throw error;
  }
};

export default getChainPrices;
