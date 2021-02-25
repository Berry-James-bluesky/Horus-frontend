import React, { useState, useEffect } from "react";
import { Total } from "./Total";
import { ProjectSplit } from "./ProjectSplit";
import { getTimers } from "../../API";
import { ChartStyle } from "../filters/buttons/ChartStyle";
import { useSharedChartState } from "../functions/sharedChartState";
import { useSharedTimerDataState } from "../functions/sharedTimerDataState";
import { useBetween } from "use-between";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    let isSubscribed = true;
    getTimers().then((timers: any) => {
      if (isSubscribed) {
        setTimerData(timers);
        setLoading(false);
      }
    });
    // cancel subscription to useEffect
    return () => {
      isSubscribed = false;
    };
  }, []);

  useEffect(() => {
    console.log(chartType);
  }, [chartType]);

  const getType = (e: React.MouseEvent<HTMLButtonElement>) => {
    setGraphStyle(e.currentTarget.value);
    console.log(graphStyle);
  };

  if (loading) {
    return (
      <div className="h-full">
        <CircularProgress className="m-auto absolute left-0 right-0 top-0 bottom-0" />
      </div>
    );
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
