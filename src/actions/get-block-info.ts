import axios from "axios";
import { BlockInfoData, BlockResponseData } from "../types";
import dayjs from "dayjs";
import determineMiner from "./determine-miner";
import formatNumber from "./format-number";
import determineTransactionVolumeAndReward from "./determine-transaction-volume-and-reward";
import determineBlockVersion from "./determine-block-version";
import calculateDifficulty from "./determine-block-difficulty";
import { toast } from "react-toastify";

const getBlockInfo = async (
  referenceBlock: BlockResponseData
): Promise<BlockInfoData | null> => {
  const {
    hash,
    height,
    time,
    n_tx: numberOfTransactions,
    mrkl_root,
    ver,
    bits,
    weight,
    size,
    nonce,
    tx,
    fee,
  } = referenceBlock;
  try {
    // Fetch latest block information (required to calculate confirmations) - Requires CORS
    const response = await axios.get<BlockResponseData>(
      "https://blockchain.info/latestblock"
    );

    const latestBlock = response.data;

    const { transactionVolume, blockReward } =
      determineTransactionVolumeAndReward({
        transactions: tx,
        fee,
      });

    const feeReward = fee / 10 ** 8;

    return {
      hash: hash,
      confirmations: (latestBlock.height - height + 1).toLocaleString(),
      timestamp: dayjs.unix(time).format("YYYY-MM-DD HH:mm"),
      height: height,
      miner: determineMiner(referenceBlock),
      numberOfTransactions: formatNumber(numberOfTransactions),
      difficulty: calculateDifficulty(bits),
      merkleRoot: mrkl_root,
      version: determineBlockVersion(ver),
      bits: formatNumber(bits),
      weight: `${formatNumber(weight)} WU`,
      size: `${formatNumber(size)} bytes`,
      nonce: formatNumber(nonce),
      transactionVolume: `${formatNumber(transactionVolume, {
        options: { maximumFractionDigits: 8 },
      })} BTC`,
      blockReward: `${formatNumber(blockReward, {
        options: { minimumFractionDigits: 8 },
      })} BTC`,
      feeReward: `${formatNumber(feeReward, {
        options: { maximumFractionDigits: 8 },
      })} BTC`,
    };
  } catch (error) {
    toast.error(
      `Blocked by CORS? Time to extend your reach! Click here for a solution extension!`,
      {
        toastId: "error-get-block-info",
        autoClose: false,
        style: { cursor: "pointer" },
        closeOnClick: true,
        onClick: () => {
          // Navigates to new tab for CORS extension
          window.open(
            "https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en",
            "_blank"
          );
          // Makes sure the user knows what to do once they've navigated away from the page to the extension and then return.
          toast.info("Refresh the page once you've got CORS up and running!", {
            autoClose: false,
          });
        },
      }
    );
    return null;
  }
};

export default getBlockInfo;
