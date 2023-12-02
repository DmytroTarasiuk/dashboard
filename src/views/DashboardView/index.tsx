import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Dashboard from "../../components/Dashboard";
import mockSales from "../../mock/orders";
import { setOrderList } from "../../redux/orders/actions";
import { getOrderList } from "../../redux/orders/selectors";
import { IOrder } from "../../redux/orders/state";

const DashboardView = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getOrderList);

  useEffect(() => {
    dispatch(setOrderList(mockSales as IOrder[]));
  }, [dispatch]);

  return <Dashboard orders={orders} />;
};

export default DashboardView;
