import {
  Container,
  SidebarContainer,
  SearchContainer,
  TableContainer,
} from "../../styles/block-explorer.styles";

const BlockExplorerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <SidebarContainer>
        {/* Sidebar content */}
        <h1>Sidebar</h1>
      </SidebarContainer>
      <SearchContainer>
        {/* Search header content */}
        <h1>Search Header</h1>
      </SearchContainer>
      <TableContainer>
        {/* Table container content */}
        <h1>Table</h1>
        {children}
      </TableContainer>
    </Container>
  );
};

export default BlockExplorerLayout;
