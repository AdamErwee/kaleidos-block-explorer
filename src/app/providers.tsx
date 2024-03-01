"use client";

import GlobalStyles, { Header } from "../styles/global-styles";
import StyledComponentsRegistry from "../lib/styled-components-registry";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ToastContainer />
      <GlobalStyles />
      <Header />
      {props.children}
    </StyledComponentsRegistry>
  );
};

export default Providers;
