import getChainPrices from "../../api/get-chain-prices";
import Sidebar from "../../components/sidebar";
import { LayoutContainer } from "../../styles/block-explorer-layout.styles";

const BlockExplorerLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const chainData = await getChainPrices();
  return (
    <LayoutContainer>
      <Sidebar chains={chainData} />
      {children}
    </LayoutContainer>
  );
};

export default BlockExplorerLayout;
