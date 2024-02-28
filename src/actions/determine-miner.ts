import { BlockResponseData, MiningPool } from "../types";
import miningPoolLookupData from "../constants/miningPoolLookup.json";

const miningPools: MiningPool[] = miningPoolLookupData;

const determineMiner = (referenceBlock: BlockResponseData): string => {
  const inputScriptHex = referenceBlock.tx[0].inputs[0].script;

  const decodedHex = Buffer.from(inputScriptHex, "hex").toString("ascii");

  // Loop through each object in the lookup array
  for (const pool of miningPools) {
    // Check if any tag in the "tags" array matches a part of the decoded string (case-insensitive)
    if (
      pool.tags.some((tag) =>
        decodedHex.toLowerCase().includes(tag.toLowerCase())
      )
    ) {
      // If a match is found, return the pool object
      return pool.name;
    }
  }
  // If no match is found, return 'Unknown'
  return "Unknown";
};

export default determineMiner;
