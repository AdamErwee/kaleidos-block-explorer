import {
  TableData,
  TableHead,
  TableMain,
  TableRow,
} from "../styles/table.styles";

import { LatestBlockData } from "../types";

interface LatestBlockTableColumn {
  key: keyof LatestBlockData;
  header: string;
}

const columns: LatestBlockTableColumn[] = [
  { key: "height", header: "Height" },
  { key: "hash", header: "Hash" },
  { key: "minedTime", header: "Mined" },
  { key: "miner", header: "Miner" },
  { key: "size", header: "Size" },
];

interface TableProps {
  data: LatestBlockData[];
}

const LatestBlocksTable: React.FC<TableProps> = ({ data }) => {
  return (
    <TableMain>
      <TableHead>
        <TableRow>
          {columns.map(({ header }) => (
            <TableData key={header}>{header}</TableData>
          ))}
        </TableRow>
      </TableHead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map(({ key }) => (
              <TableData key={key.toString()}>{row[key]}</TableData>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableMain>
  );
};

export default LatestBlocksTable;
