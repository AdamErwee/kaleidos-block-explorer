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

  const data = [
    {
      id: 1,
      name: "Block 1",
      mined: "2023-12-25 12:00:00",
      miner: "SlushPool",
      size: 500,
    },
    {
      id: 2,
      name: "Block 2",
      mined: "2023-12-26 12:00:00",
      miner: "AntPool",
      size: 600,
    },
  ];

  return <Table data={latestBlocks} />;
};

export default LatestBlocks;
