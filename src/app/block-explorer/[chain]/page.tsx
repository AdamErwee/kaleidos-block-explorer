"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CHAINS } from "../../../constants/chains";
import Table from "../../../components/latest-blocks-table";
import { LatestBlockData } from "../../../types";
import getLatestBlocks from "../../../api/get-latest-blocks";

const LatestBlocks = () => {
  const [latestBlocks, setLatestBlocks] = useState<LatestBlockData[]>([]);

  const pathname = usePathname();
  const params = useSearchParams();
  const searchParam = params.get("search");
  console.log("searchParam: ", searchParam);

  useEffect(() => {
    const activeChain = CHAINS.find(({ symbol }) => pathname.includes(symbol));

    const fetchLatestBlocks = async () => {
      if (activeChain) {
        try {
          const { apiReference, searchable } = activeChain;
          const searchQuery = searchable && searchParam ? searchParam : "";

          const blocks = await getLatestBlocks({
            chain: apiReference,
            searchParam: searchQuery,
          });

          setLatestBlocks(blocks);
        } catch (error) {
          console.error("Error fetching latest blocks:", error);
          setLatestBlocks([]); // Reset blocks in case of error
        }
      }
    };

    fetchLatestBlocks();
  }, [pathname, searchParam]);

  return <Table data={latestBlocks} isLoading={latestBlocks.length === 0} />;
};

export default LatestBlocks;
