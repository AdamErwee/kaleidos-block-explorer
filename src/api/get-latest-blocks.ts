import axios, { AxiosResponse } from "axios";
import { LatestBlockData } from "../types";
import calculateTimeDifference from "../actions/calculate-time-difference";
import { toast } from "react-toastify";

interface GetLatestBlocksProps {
  chain: string;
  searchParam?: string;
}

interface BlockChairResponse {
  id: number;
  hash: string;
  time: string;
  miner: string;
  guessed_miner: string;
  size: number;
}

const getLatestBlocks = async ({
  chain,
  searchParam,
}: GetLatestBlocksProps): Promise<LatestBlockData[]> => {
  if (!chain) {
    return [];
  }

  try {
    const url = searchParam
      ? `https://api.blockchair.com/${chain}/blocks?q=hash(${searchParam})`
      : `https://api.blockchair.com/${chain}/blocks?limit=15`;

    const response: AxiosResponse<{ data: BlockChairResponse[] }> =
      await axios.get(url);

    const { data: raw } = response.data;

    if (raw) {
      const latestBlocksData = raw.map(
        ({ id, hash, time, miner, guessed_miner, size }) => {
          const minedTime = calculateTimeDifference(time);

          return {
            height: id,
            hash,
            minedTime,
            miner: miner || guessed_miner,
            size: `${size} bytes`,
            searchable: chain === "bitcoin",
          };
        }
      );

      return latestBlocksData;
    } else {
      return [];
    }
  } catch (error) {
    toast.error(
      `Oof. This isn't good - There was an error fetching the latest block for this chain!`,
      {
        toastId: "error-get-latest-blocks",
      }
    );
    return error;
  }
};

export default getLatestBlocks;
