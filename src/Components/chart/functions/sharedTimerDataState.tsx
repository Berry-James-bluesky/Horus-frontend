import React, { useState } from "react";
import { useBetween } from "use-between";

const useTimerDataState = () => {
  const [graphStyle, setGraph] = useState("bar");
  const [timerData, setData]: any = useState("client");
  const setTimerData = (value: any) => {
    setData(value);
  };
  const setGraphStyle = (value: any) => {
    setGraph(value);
  };
  return { timerData, setTimerData, graphStyle, setGraphStyle };
};

export const useSharedTimerDataState = () => useBetween(useTimerDataState);
