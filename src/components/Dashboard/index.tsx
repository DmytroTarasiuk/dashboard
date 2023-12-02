import { IOrder } from "../../redux/orders/state";

interface IDashboard {
  orders: IOrder[];
}

const Dashboard = ({ orders }: IDashboard) => {
  console.log(orders);

  return <>Dashboard</>;
};

export default Dashboard;
