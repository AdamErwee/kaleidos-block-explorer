import axios from "axios";
import { LatestBlockData } from "../types";
import calculateTimeDifference from "../actions/calculate-time-difference";

interface GetLatestBlocksProps {
  chain: string;
  searchParam: string;
}

const getLatestBlocks = async ({
  chain,
  searchParam,
}: GetLatestBlocksProps): Promise<LatestBlockData[]> => {
  if (!chain) {
    return [];
  }

  try {
    let response;
    if (!searchParam) {
      response = await axios.get<any>(
        `https://api.blockchair.com/${chain}/blocks?limit=30`
      );
    } else {
      // https://api.blockchair.com/bitcoin/raw/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
      response = await axios.get<any>(
        `https://api.blockchair.com/bitcoin/blocks?q=hash(000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a111111)`
      );

      console.log("response: ", response);
    }

    const { data: raw } = response?.data;

    if (raw) {
      const latestBlocksData = raw.map(
        ({ id, hash, time, miner, guessed_miner, size }) => {
          const minedTime = calculateTimeDifference(time);

          return {
            height: id,
            hash,
            minedTime,
            miner: miner || guessed_miner, // Differs for Ethereum vs Bitcoin/Bitcoin Cash
            size: `${size} bytes`,
          };
        }
      );

      return latestBlocksData;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching latest blocks:", error);
    throw error;
  }
};

export default getLatestBlocks;
