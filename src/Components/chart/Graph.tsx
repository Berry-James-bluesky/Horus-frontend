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
import { useSharedTimerDataState } from "./functions/sharedTimerDataState";
import { useSharedFetchedData } from "./Calculations/ProjectSplit";
import { useSharedChartState } from "./functions/sharedChartState";

/**
 *
 * @prop {object} graphData
 * @prop {object} graphOptions
 */

const Graph = () => {
  const { graphStyle } = useSharedTimerDataState();
  const { fetchedData, fetchedLabels } = useSharedFetchedData();
  const { chartName } = useSharedChartState();
  const data = {
    labels: fetchedLabels,
    datasets: [
      {
        label: chartName,
        data: fetchedData,
        backgroundColor: [
          "rgba(133,35,36, 1)",
          "#6441a4",
          "#fff",
          "#0a115e",
          "#e26e5c",
          "#045171",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: chartName,
      fontSize: 20,
      color: '#fff',
      fontColor: '#fff'
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
    legend: {
      labels: {
        fontColor: '#fff',
        defaultFontColor: '#fff'
      }
    }
  };

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
    return(null);
  }
};

export default Graph;
