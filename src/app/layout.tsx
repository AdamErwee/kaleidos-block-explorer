import Providers from "./providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adam's Block Explorer",
  description:
    "A humble Block Explorer for Bitcoin, Bitcoin Cash and Ethereum!",
};

const RootLayout = (props: React.PropsWithChildren) => {
  return (
    <html>
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
