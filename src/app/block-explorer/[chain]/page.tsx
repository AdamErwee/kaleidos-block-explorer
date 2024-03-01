"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getLatestBlocks from "../../../api/get-latest-blocks";
import Table from "../../../components/latest-blocks-table";
import BitcoinHashSearch from "../../../components/search";
import { CHAINS } from "../../../constants/chains";
import { TableContainer } from "../../../styles/block-explorer-layout.styles";
import { LatestBlockData, ValidChain } from "../../../types";
import { toast } from "react-toastify";

const LatestBlocks = () => {
  const [latestBlocks, setLatestBlocks] = useState<LatestBlockData[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const currentChainSymbol = pathname.replace(
    "/block-explorer/",
    ""
  ) as ValidChain;

  const validChains: ValidChain[] = ["btc", "eth", "bch"];

  const params = useSearchParams();
  const searchParam = params.get("search");
  const activeChain = CHAINS.find(
    ({ symbol }) => symbol === currentChainSymbol
  );

  useEffect(() => {
    // Ensure that the user does not dynamically change the url, navigating to funky routes/chains
    if (!validChains.includes(currentChainSymbol)) {
      toast.warn(
        "Whoops! We only care about BTC, ETH or BCH. Click me to navigate back to safety!",
        {
          toastId: "warn-invalid-route",
          autoClose: false,
          closeOnClick: true,
          style: { cursor: "pointer" },
          onClick: () => {
            router.push("/block-explorer/btc");
          },
        }
      );

      return;
    }
    const fetchLatestBlocks = async () => {
      if (activeChain) {
        try {
          const { apiReference, searchable } = activeChain;
          const searchQuery =
            searchable && searchParam && searchParam.length === 64
              ? searchParam
              : "";

          const blocks = await getLatestBlocks({
            chain: apiReference,
            searchParam: searchQuery,
          });

          setLatestBlocks(blocks);
        } catch (error) {
          setLatestBlocks([]);
        }
      }
    };

    fetchLatestBlocks();
  }, [pathname, searchParam]);

  return (
    <TableContainer>
      {activeChain?.searchable && <BitcoinHashSearch />}
      <h2>Latest Blocks</h2>
      <Table data={latestBlocks} isLoading={latestBlocks.length === 0} />
    </TableContainer>
  );
};

export default LatestBlocks;
