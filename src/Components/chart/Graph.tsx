import React from "react";
import {
  Pie,
  Bar,
  Doughnut,
  Bubble,
  Line,
  Radar,
  Polar,
  HorizontalBar,
  Scatter,
} from "react-chartjs-2";
import { useSharedTimerDataState } from "./Calculations/CalcContainer";
import { useSharedFetchedData } from "./Calculations/ProjectSplit";
import { useSharedChartState } from "../../pages/Statistics";

/**
 * Generates a Pie graph out of supplied data
 *
 * @prop {object} graphData
 * @prop {object} graphOptions
 */

const Graph = () => {
  const { timerData, graphStyle } = useSharedTimerDataState();
  const { fetchedData, fetchedLabels } = useSharedFetchedData();
  const { chartName } = useSharedChartState();
  const data = {
    labels: fetchedLabels,
    datasets: [
      {
        label: chartName,
        data: fetchedData,
        backgroundColor: [
          "#e97568",
          "#f5e09f",
          "#aac1a7",
          "#9a9174",
          "#59899c",
          "#045171",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: chartName,
      fontSize: 20,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  let date = new Date();

  let string = date.toString();

  if (graphStyle === "Pie") {
    return <Pie data={data} options={options} />;
  }
  if (graphStyle === "Bar") {
    return <Bar data={data} options={options} />;
  }
  if (graphStyle === "Line") {
    return <Line data={data} options={options} />;
  }
  if (graphStyle === "Radar") {
    return <Radar data={data} options={options} />;
  }
  if (graphStyle === "Polar") {
    return <Polar data={data} options={options} />;
  }
  if (graphStyle === "Doughnut") {
    return <Doughnut data={data} options={options} />;
  }
  if (graphStyle === "Horizontal") {
    return <HorizontalBar data={data} options={options} />;
  }
  if (graphStyle === "Scatter") {
    return <Scatter data={data} options={options} />;
  }
  if (graphStyle === "Bubble") {
    return <Bubble data={data} options={options} />;
  } else {
    return <span></span>;
  }
};

export default Graph;
