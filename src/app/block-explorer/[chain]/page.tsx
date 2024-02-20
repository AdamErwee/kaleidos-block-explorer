"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CHAINS } from "../../../constants/chains";
import getLatestBlocks from "../../../api/getLatestBlocks";
import Table from "../../../components/latest-blocks-table";
import { LatestBlockData } from "../../../types";

const LatestBlocks = () => {
  const pathname = usePathname();
  const [latestBlocks, setLatestBlocks] = useState<LatestBlockData[]>([]);
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

  return <Table data={latestBlocks} />;
};

export default LatestBlocks;
