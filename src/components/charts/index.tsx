import { memo, useMemo } from "react";
import Grid from "@mui/material/Grid";

import { IOrder } from "../../redux/orders/state";
import { ProductCategories } from "../../redux/orders/state";

import PieChart from "./PieChart";
import TimelineChart from "./TimeLineChart";

import styles from "./styles.module.css";

interface ICharts {
  data: IOrder[];
}

const Charts = ({ data }: ICharts) => {
  const timeLineData = useMemo(() => {
    return data?.map((item) => ({
      date: item.date,
      profit: item.profit,
      cost: item.cost,
    }));
  }, [data]);

  const electronicProducts = useMemo(
    () =>
      data?.filter((item) => item.category === ProductCategories.ELECTRONICS),
    [data],
  );

  const jewerlyProducts = useMemo(
    () => data?.filter((item) => item.category === ProductCategories.JEWELERY),
    [data],
  );

  const clothesProducts = useMemo(
    () =>
      data?.filter((item) => item.category === ProductCategories.MENS_CLOTHING),
    [data],
  );

  const electronicsTotal = useMemo(
    () => electronicProducts?.reduce((acc, val) => acc + val.revenue, 0),
    [electronicProducts],
  );

  const jewerlyTotal = useMemo(
    () => jewerlyProducts?.reduce((acc, val) => acc + val.revenue, 0),
    [jewerlyProducts],
  );

  const clothesTotal = useMemo(
    () => clothesProducts?.reduce((acc, val) => acc + val.revenue, 0),
    [clothesProducts],
  );

  const showPie = useMemo(
    () => electronicsTotal && jewerlyTotal && clothesTotal,
    [electronicsTotal, jewerlyTotal, clothesTotal],
  );

  return (
    <Grid container spacing={2} className={styles.chartContainer}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        {timeLineData?.length ? <TimelineChart data={timeLineData} /> : null}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        {showPie && (
          <PieChart
            clothesTotal={clothesTotal}
            electronicsTotal={electronicsTotal}
            jewerlyTotal={jewerlyTotal}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default memo(Charts);
