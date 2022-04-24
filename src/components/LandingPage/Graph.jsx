import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Your Expense Tracker",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Year 2018",
      data: [500, 1200, 400, 600, 800, 600, 1800, 1000, 2000, 1500, 500, 120],
      borderColor: "rgb(138, 43, 226)",
      backgroundColor: "rgb(176, 135, 214)",
    },
    {
      label: "Year 2019",
      data: [700, 400, 900, 1400, 1800, 200, 700, 400, 2000, 2500, 3000, 1800],
      borderColor: "rgb(243, 216, 14)",
      backgroundColor: "rgb(233, 220, 119)",
    },
    {
      label: "Year 2020",
      data: [600, 100, 1900, 3400, 2800, 300, 750, 450, 200, 900, 350, 800],
      borderColor: "rgb(65, 3, 3)",
      backgroundColor: "rgb(82, 37, 37)",
    },
    {
      label: "Year 2021",
      data: [1000, 1400, 900, 400, 800, 300, 800, 4000, 2000, 4000, 3000, 800],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(218, 150, 164)",
    },
    {
      label: "Year 2022",
      data: [500, 600, 1000, 500, 650, 1000, 500, 500, 800, 600, 1200, 1400],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function Graph() {
  return (
    <div
      style={{
        width: "1000px",
        height: "500px",
        marginTop: "60px",
        marginLeft: "100px",
        border: "5px solid black",
      }}
    >
      <Line options={options} data={data} />;
    </div>
  );
}

export default Graph;
