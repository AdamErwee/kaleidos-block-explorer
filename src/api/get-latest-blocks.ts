import axios from "axios";
import { LatestBlockData } from "../types";
import calculateTimeDifference from "../actions/calculate-time-difference";

const getLatestBlocks = async (
  chain: string | null | undefined
): Promise<LatestBlockData[]> => {
  console.log("HERE");

  if (!chain) {
    return [];
  }

  try {
    const response = await axios.get<any>(
      `https://api.blockchair.com/${chain}/blocks?limit=15`
    );

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
