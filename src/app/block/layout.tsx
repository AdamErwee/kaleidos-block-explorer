import { LayoutContainer } from "../../styles/block-layout.styles";

export default function BlockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
