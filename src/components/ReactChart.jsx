import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import "./ReactChart.css";
import { faker } from "@faker-js/faker";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  // responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Years",
        color: "black",
      },
      stacked: true,
    },
    y: {
      title: {
        display: true,
        text: "Recall",
        color: "black",
      },
      stacked: true,
    },
  },
};

const labels = new Array(200).fill(0).map((_, i) => `Year ${i}`);

const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: "line",
      label: "Dataset 2",
      borderColor: "green",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
  ],
};

export default function ReactChart() {
  return (
    <article className="canvas-container">
      <Chart options={options} type="bar" data={data} height={100} />
    </article>
  );
}
