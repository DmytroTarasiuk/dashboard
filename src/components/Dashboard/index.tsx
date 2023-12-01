import { IProduct } from "../../redux/products/state";

interface IDashboard {
  products: IProduct[];
}

const Dashboard = ({ products }: IDashboard) => {
  console.log(products);

  return <>Dashboard</>;
};

export default Dashboard;
