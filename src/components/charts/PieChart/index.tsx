import ReactApexChart from "react-apexcharts";

import { ProductCategories } from "../../../redux/orders/state";

interface PieData {
  electronicsTotal: number;
  clothesTotal: number;
  jewerlyTotal: number;
}

const PieChart = ({
  electronicsTotal,
  clothesTotal,
  jewerlyTotal,
}: PieData) => {
  const options = {
    chart: {
      id: "pie-chart",
    },
    labels: [
      ProductCategories.ELECTRONICS,
      ProductCategories.JEWELERY,
      ProductCategories.MENS_CLOTHING,
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  const series = [electronicsTotal, jewerlyTotal, clothesTotal];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={400}
      />
    </div>
  );
};

export default PieChart;
