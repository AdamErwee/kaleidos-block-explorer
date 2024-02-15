import axios from "axios";

const fetchBlocks = async (chain: string): Promise<any[]> => {
  try {
    const response = await axios.get<any>(
      `https://api.blockchair.com/bitcoin/blocks?limit=15`
    );

    console.log("response: ", response.data.data.length);
    console.log("response: ", response.data.data[0]);

    if (response.data && Array.isArray(response.data)) {
      // Generally this response is sorted by height, here I'm just making sure that this is the case
      const heightSortedBlocks = response.data.sort(
        (a: any, b: any) => b.height - a.height
      );

      // For now I'm limiting the displayed amount to 15 (seems sufficient for now)
      const minLatestBlocks = heightSortedBlocks.slice(0, 15);

      return minLatestBlocks;
    } else {
      // Return an empty array if no blocks are found
      return [];
    }
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching blocks for day:", error);
    throw error;
  }
};

export default fetchBlocks;
