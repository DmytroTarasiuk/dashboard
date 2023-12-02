import ReactApexChart from "react-apexcharts";

interface TimelineData {
  profit: number;
  date: string;
  cost: number;
}

interface Props {
  data: TimelineData[];
}

const TimelineChart = ({ data }: Props) => {
  const dates = data.map((item) => item.date);
  const profit = data.map((item) => item.profit);
  const cost = data.map((item) => item.cost);

  // Chart options
  const options = {
    chart: {
      id: "profit-cost-chart",
    },
    xaxis: {
      categories: dates,
    },
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

  const series = [
    {
      name: "Profit",
      data: profit,
    },
    {
      name: "Cost",
      data: cost,
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={400}
      />
    </div>
  );
};

export default TimelineChart;
