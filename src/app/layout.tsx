import Providers from "./provider";

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
