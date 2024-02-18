import { StaticImageData } from "next/image";

export interface ChainInfo {
  name: string;
  apiReference: string;
  abbreviation: string;
  icon: StaticImageData;
  currentPrice?: number;
}
