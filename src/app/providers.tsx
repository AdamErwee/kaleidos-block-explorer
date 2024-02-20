"use client";

import GlobalStyles, { Header } from "../styles/global-styles";
import StyledComponentsRegistry from "../styles/styled-components-registry";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <Header />
      {props.children}
    </StyledComponentsRegistry>
  );
};

export default Providers;
