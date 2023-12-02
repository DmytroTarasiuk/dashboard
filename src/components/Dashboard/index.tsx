import { getRandomInt } from "../../mock/orders";
import { IOrder } from "../../redux/orders/state";
import EnhancedTable from "../Table";

import DashboardTableCell, { IDashboardTableCell } from "./DashboardTableCell";

interface IDashboard {
  orders: IOrder[];
}

const headCells = [
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

const Dashboard = ({ orders }: IDashboard) => {
  const salesData = orders?.map((order) => {
    const revenue = +(order.unitSold * order.price).toFixed(2);
    const cost = +(revenue * +`0.${getRandomInt(3, 7)}`).toFixed(2);
    const profit = +(revenue - cost).toFixed(2);
    const profitMargin = ((profit / revenue) * 100).toFixed(0);

    return {
      ...order,
      revenue,
      cost,
      profit,
      profitMargin,
    };
  });

  return (
    <EnhancedTable
      rows={salesData}
      headCells={headCells}
      hideFieldsOnList={["id", "productId", "description"]}
      tabelCellComponent={(props: IDashboardTableCell) => (
        <DashboardTableCell {...props} />
      )}
    />
  );
};

export default Dashboard;
