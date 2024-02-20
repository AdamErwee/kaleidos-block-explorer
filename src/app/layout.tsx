import Providers from "./providers";

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
