import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import colors from "../styles/colors";
import {
  TableData,
  TableHead,
  TableMain,
  TableRow,
} from "../styles/table.styles";

import { LatestBlockData } from "../types";
import { useRouter } from "next/navigation";

interface LatestBlockTableColumn {
  key: keyof LatestBlockData;
  header: string;
  isClickable?: boolean;
}

const columns: LatestBlockTableColumn[] = [
  { key: "height", header: "Height" },
  { key: "hash", header: "Hash", isClickable: true },
  { key: "minedTime", header: "Mined" },
  { key: "miner", header: "Miner" },
  { key: "size", header: "Size" },
];

interface TableProps {
  data: LatestBlockData[];
  isLoading: boolean;
}

const LatestBlocksTable: React.FC<TableProps> = ({ data, isLoading }) => {
  const router = useRouter();

  return (
    <TableMain>
      <TableHead>
        <TableRow>
          {columns.map(({ header }) => (
            <TableData key={`${header}-header`} color={colors.dark_grey}>
              {header}
            </TableData>
          ))}
        </TableRow>
      </TableHead>
      <tbody>
        {!isLoading ? (
          data.map((row, index) => (
            <TableRow key={index}>
              {columns.map(({ key, isClickable }) => (
                <TableData
                  key={key.toString()}
                  $isClickable={isClickable}
                  color={isClickable ? colors.link_blue : ""}
                  onClick={() => {
                    // I added this if a developer ever accidentally adds 'isClickable' to another column, ensuring that erroneous navigation doesn't occur
                    if (isClickable && key === "hash") {
                      router.push(`/block/btc/${row[key]}`);
                    }
                  }}
                >
                  {row[key]}
                </TableData>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            {columns.map(({ key }) => (
              <TableData key={key}>
                <Skeleton />
              </TableData>
            ))}
          </TableRow>
        )}
      </tbody>
    </TableMain>
  );
};

export default LatestBlocksTable;
