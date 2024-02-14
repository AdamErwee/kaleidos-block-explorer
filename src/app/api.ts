// src/api.ts

import axios from "axios";

// Define the base URL for Blockchain.com's API
const BASE_URL = "https://blockchain.info";

// Define the function to fetch the latest blocks
const fetchLatestBlocks = async (count: number) => {
  try {
    // Make a GET request to fetch the latest blocks
    const response = await axios.get(`${BASE_URL}/blocks/${count}?format=json`);

    // Transform the response data into an array of objects with required fields
    const latestBlocks = response.data.blocks.map((block: any) => ({
      height: block.height,
      hash: block.hash,
      mined: block.time,
      miner: block.miner,
      size: block.size,
    }));

    // Return the array of latest blocks
    return latestBlocks;
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching latest blocks:", error);
    throw error;
  }
};

export default fetchLatestBlocks;
