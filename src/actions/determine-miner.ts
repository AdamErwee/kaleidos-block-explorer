import { BlockResponseData, MiningPool } from "../types";
import miningPoolLookupData from "../constants/miningPoolLookup.json";

const miningPools: MiningPool[] = miningPoolLookupData;

/*
  This function determines the miner of a block based on the input script hex
  It reads a lookup table of mining pool data to match against the decoded hex string.
  See ./CREDITS.md for proper credit to lookup data used here.
*/
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
