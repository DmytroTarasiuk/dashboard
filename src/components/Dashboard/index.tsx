import { getRandomInt } from "../../mock/orders";
import { IOrder } from "../../redux/orders/state";
import Charts from "../charts";
import EnhancedTable from "../Table";

import DashboardTableCell, { IDashboardTableCell } from "./DashboardTableCell";
import { dashboardTableCells } from "./utils";

interface IDashboard {
  orders: IOrder[];
}

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
    <>
      <EnhancedTable
        rows={salesData}
        headCells={dashboardTableCells}
        orderByField="revenue"
        hideFieldsOnList={["id", "productId", "description"]}
        renderFilterFields={["category"]}
        tabelCellComponent={(props: IDashboardTableCell) => (
          <DashboardTableCell {...props} />
        )}
      />
      <Charts data={salesData} />
    </>
  );
};

export default Dashboard;
