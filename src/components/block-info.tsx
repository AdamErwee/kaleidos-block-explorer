import Skeleton from "react-loading-skeleton";
import {
  BlockHeader,
  BlockPageContainer,
  BlockSubHeader,
  InfoCard,
  InfoRow,
} from "../styles/block-info.styles";
import Image from "next/image";
import bitcoinIcon from "../../public/icons/bitcoin.png";
import colors from "../styles/colors";
import { BlockInfoData } from "../types";
import { toast } from "react-toastify";
import { FaClipboard } from "react-icons/fa";
import { Fragment } from "react";

interface BlockInfoDataProps {
  infoData: BlockInfoData | null;
}

const headers: { key: keyof BlockInfoData; header: string }[] = [
  { key: "hash", header: "Hash" },
  { key: "confirmations", header: "Confirmations" },
  { key: "timestamp", header: "Timestamp" },
  { key: "height", header: "Height" },
  { key: "miner", header: "Miner" },
  { key: "numberOfTransactions", header: "Number of Transactions" },
  { key: "difficulty", header: "Difficulty" },
  { key: "merkleRoot", header: "Merkle root" },
  { key: "version", header: "Version" },
  { key: "bits", header: "Bits" },
  { key: "weight", header: "Weight" },
  { key: "size", header: "Size" },
  { key: "nonce", header: "Nonce" },
  { key: "transactionVolume", header: "Transaction Volume" },
  { key: "blockReward", header: "Block Reward" },
  { key: "feeReward", header: "Fee Reward" },
];

const BlockInfo: React.FC<BlockInfoDataProps> = ({ infoData }) => {
  return (
    <Fragment>
      <BlockHeader>
        <Image
          src={bitcoinIcon} // TODO: Future feature - Make applicable to all chains. Currently only available for Bitcoin.
          alt={`bitcoin-icon`}
          width={40}
          height={40}
        />
        <h2 style={{ color: colors.dark_grey }}>BTC /</h2>
        <h2>Block</h2>
      </BlockHeader>
      <BlockSubHeader>
        {!infoData ? (
          <Skeleton />
        ) : (
          `Block at depth ${infoData.height} in Bitcoin blockchain`
        )}
      </BlockSubHeader>
      <BlockPageContainer>
        {headers.map(({ header, key }) => {
          return (
            <InfoRow key={`${key}-row`}>
              <InfoCard key={`${key}-title`} type="header">
                {header}
              </InfoCard>
              <InfoCard key={`${key}-data`} type={key}>
                {!infoData ? <Skeleton /> : infoData[key]}
                {infoData && key === "hash" && (
                  <FaClipboard
                    size={15}
                    style={{ padding: "0 15px", cursor: "pointer" }}
                    onClick={() =>
                      navigator.clipboard.writeText(infoData[key]).then(() => {
                        toast.success("Copied to Clipboard!", {
                          toastId: "copy-hash-success",
                        });
                      })
                    }
                  />
                )}
              </InfoCard>
            </InfoRow>
          );
        })}
      </BlockPageContainer>
    </Fragment>
  );
};

export default BlockInfo;
