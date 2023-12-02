import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import Dashboard from "../../components/Dashboard";
import mockSales from "../../mock/orders";
import { getRandomInt } from "../../mock/orders";
import { clearOrderList, setOrderList } from "../../redux/orders/actions";
import { IOrder } from "../../redux/orders/state";

const DashboardView = () => {
  const dispatch = useDispatch();

  const salesData = mockSales?.map((order) => {
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

  useEffect(() => {
    dispatch(setOrderList(salesData as IOrder[]));

    return () => {
      dispatch(clearOrderList());
    };
  }, [dispatch, salesData]);

  return <Dashboard />;
};

export default DashboardView;
