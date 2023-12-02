import { useSelector } from "react-redux";

import { getOrderList } from "../../redux/orders/selectors";
import Charts from "../charts";
import ProductComparison from "../ProductComparison";
import EnhancedTable from "../Table";

import DashboardTableCell, { IDashboardTableCell } from "./DashboardTableCell";
import { dashboardTableCells } from "./utils";

const Dashboard = () => {
  const salesData = useSelector(getOrderList);
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
      <Charts />
      <ProductComparison />
    </>
  );
};

export default Dashboard;
