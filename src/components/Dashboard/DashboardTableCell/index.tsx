import { useMemo } from "react";
import TableCell from "@mui/material/TableCell";

import IOrder from "../../../redux/state";
import { truncateText } from "../../../utils";

import styles from "./styles.module.css";

export interface IDashboardTableCell {
  keyItem: string;
  row: IOrder;
}

const DashboardTableCell = ({ keyItem, row }: IDashboardTableCell) => {
  const rowContent = useMemo(() => {
    switch (keyItem) {
      case "title":
        return truncateText(row[keyItem], 10);
      case "profitMargin":
        return `${row[keyItem]}%`;
      default:
        return row[keyItem];
    }
  }, [keyItem, row]);

  return (
    <TableCell align="left" padding="normal">
      <div className={styles.cell}>{rowContent}</div>
    </TableCell>
  );
};

export default DashboardTableCell;
