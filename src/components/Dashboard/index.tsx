import { getRandomInt } from "../../mock/orders";
import { IOrder } from "../../redux/orders/state";

interface IDashboard {
  orders: IOrder[];
}

const Dashboard = ({ orders }: IDashboard) => {
  const salesData = orders?.map((order) => {
    const revenue = +(order.unitSold * order.price).toFixed(2);
    const cost = +(revenue * +`0.${getRandomInt(3, 7)}`).toFixed(2);
    const profit = revenue - cost;
    const profitMargin = ((profit / revenue) * 100).toFixed(0);

    return {
      ...order,
      revenue,
      cost,
      profit,
      profitMargin,
    };
  });

  console.log(salesData);

  return <>Dashboard</>;
};

export default Dashboard;
