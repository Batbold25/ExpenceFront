import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Data } from "./MockData";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 3",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

export const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "rgba(53, 162, 235, 0.5)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "pink",
        borderWidth: 2,
      },
    ],
  });

  return (
    <Bar
      style={{ width: "550px", height: "100%" }}
      options={options}
      //   data={data}
      data={chartData}
    />
  );
};
