import getChains from "../../actions/getChains";
import Search from "../../components/search";
import Sidebar from "../../components/sidebar";
import {
  Container,
  TableContainer,
} from "../../styles/block-explorer-layout.styles";

const BlockExplorerLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const chainData = await getChains();
  return (
    <Container>
      <Sidebar chains={chainData} />
      <TableContainer>
        <Search />
        <h2>Latest Blocks</h2>
        {children}
      </TableContainer>
    </Container>
  );
};

export default BlockExplorerLayout;
