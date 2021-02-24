import React, { useState, useEffect } from "react";
import { Total } from "./Total";
import { ProjectSplit } from "./ProjectSplit";
import { getTimers } from "../../API";
import { ChartStyle } from "../filters/buttons/ChartStyle";
import { useSharedChartState } from "../functions/sharedChartState";
import { useSharedTimerDataState } from "../functions/sharedTimerDataState";
import { useBetween } from "use-between";

const CalcContainer = () => {
  const {
    chartType,
    setChartType,
    chartName,
    setChartName,
  } = useSharedChartState();

  const {
    timerData,
    setTimerData,
    graphStyle,
    setGraphStyle,
  } = useSharedTimerDataState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTimers().then((timers: any) => {
      setTimerData(timers);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(chartType);
  }, [chartType]);

  const getType = (e: any) => {
    setGraphStyle(e.target.value);
    console.log(graphStyle);
  };

  if (loading) {
    return <span>...loading</span>;
  }

  console.log(`el.${chartType}`);

  return (
    <div className="w-full relative right-0 p-12">
      <h1 className="mt-0">Statistics</h1>
      <ChartStyle clickEvent={getType} />
      <ProjectSplit />
      <Total />
    </div>
  );
};

export default CalcContainer;
