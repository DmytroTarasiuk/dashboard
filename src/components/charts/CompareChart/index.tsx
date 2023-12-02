import ReactApexChart from "react-apexcharts";

interface Data {
  date: string;
}

interface Props {
  data: Data[];
  product1: string;
  product2: string;
  product1Sale: number[];
  product2Sale: number[];
}

const CompareChart = ({
  data,
  product1,
  product2,
  product1Sale,
  product2Sale,
}: Props) => {
  const dates = data.map((item) => item.date);

  const options = {
    chart: {
      id: "compare-chart",
    },
    xaxis: {
      categories: dates,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    yaxis: {
      title: {
        text: "Unit sold",
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const series = [
    {
      name: product1,
      data: product1Sale,
    },
    {
      name: product2,
      data: product2Sale,
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default CompareChart;
