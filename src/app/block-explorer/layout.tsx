import getChainPrices from "../../api/get-chain-prices";
import Sidebar from "../../components/sidebar";
import { Container } from "../../styles/block-explorer-layout.styles";

const BlockExplorerLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const chainData = await getChainPrices();
  return (
    <Container>
      <Sidebar chains={chainData} />
      {children}
    </Container>
  );
};

export default BlockExplorerLayout;
