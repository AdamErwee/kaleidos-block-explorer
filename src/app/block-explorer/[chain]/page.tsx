"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CHAINS } from "../../../constants/chains";
import getLatestBlocks from "../../../api/getLatestBlocks";

const LatestBlocks = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log("router: ", router);
  const [latestBlocks, setLatestBlocks] = useState<any[]>([]); // Assuming the type of latestBlocks is an array of any
  console.log("latestBlocks: ", latestBlocks);

  useEffect(() => {
    const activeChain = CHAINS.find(({ symbol }) =>
      pathname.includes(symbol)
    )?.apiReference;

    const fetchLatestBlocks = async () => {
      if (activeChain) {
        try {
          const blocks = await getLatestBlocks(activeChain);
          setLatestBlocks(blocks);
        } catch (error) {
          console.error("Error fetching latest blocks:", error);
          setLatestBlocks([]); // Reset blocks in case of error
        }
      }
    };

    fetchLatestBlocks();
  }, [pathname]);

  return <h1>Table</h1>; // Render your table using the latestBlocks state
};

export default LatestBlocks;
