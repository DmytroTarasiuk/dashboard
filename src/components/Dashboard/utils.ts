import { FilterTypes } from "../Table/TableFilter/types";

export const dashboardTableCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
    filterType: FilterTypes.SELECT,
  },
  {
    id: "price",
    numeric: false,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "unitSold",
    numeric: false,
    disablePadding: true,
    label: "Unit sold",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "revenue",
    numeric: false,
    disablePadding: false,
    label: "Revenue",
  },
  {
    id: "cost",
    numeric: false,
    disablePadding: false,
    label: "Cost",
  },
  {
    id: "profit",
    numeric: false,
    disablePadding: false,
    label: "Profit",
  },
  {
    id: "profitMargin",
    numeric: false,
    disablePadding: true,
    label: "Profit margin",
  },
];
