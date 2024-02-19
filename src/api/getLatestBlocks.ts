import axios from "axios";
import { LatestBlockData } from "../types";

const calculateTimeDifference = (timeString: string): string => {
  const currentTime = new Date();
  const pastTime = new Date(timeString);

  const timeDifference = Math.abs(currentTime.getTime() - pastTime.getTime());

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
};

const getLatestBlocks = async (
  chain: string | null | undefined
): Promise<LatestBlockData[]> => {
  if (!chain) {
    return [];
  }

  console.log("chain: ", chain);

  try {
    const response = await axios.get<any>(
      `https://api.blockchair.com/${chain}/blocks?limit=15`
    );

    console.log("response: ", response.data.data.length);
    console.log("response: ", response.data.data[0]);

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

      console.log("latestBlocksData: ", latestBlocksData);

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
