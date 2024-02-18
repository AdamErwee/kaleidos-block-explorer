import Search from "../../components/search";
import Sidebar from "../../components/sidebar";
import {
  Container,
  TableContainer,
} from "../../styles/block-explorer-layout.styles";

const BlockExplorerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Sidebar />
      <TableContainer>
        <Search />
        <h1>Latest Blocks</h1>
      </TableContainer>
    </Container>
  );
};

export default BlockExplorerLayout;
