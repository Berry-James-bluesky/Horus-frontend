import React, { useState } from "react";
import { useBetween } from "use-between";

const useChartState = () => {
  const [chartType, setType] = useState("client");
  const [chartName, setName] = useState("All Clients");
  const setChartType = (value: any) => {
    setType(value);
  };
  const setChartName = (value: any) => {
    setName(value);
  };
  return { chartType, setChartType, chartName, setChartName };
};

export const useSharedChartState = () => useBetween(useChartState);
