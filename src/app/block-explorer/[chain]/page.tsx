"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CHAINS } from "../../../constants/chains";
import Table from "../../../components/latest-blocks-table";
import { LatestBlockData } from "../../../types";
import getLatestBlocks from "../../../api/get-latest-blocks";

const LatestBlocks = () => {
  const pathname = usePathname();
  const [latestBlocks, setLatestBlocks] = useState<LatestBlockData[]>([]);

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

  return <Table data={latestBlocks} isLoading={latestBlocks.length === 0} />;
};

export default LatestBlocks;
