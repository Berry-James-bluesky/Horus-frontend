import { useState } from "react";
import { useBetween } from "use-between";

const useTimeState = () => {
  const [startTime, setTime]: any = useState([]);
  const [endTime, setEndTime]: any = useState([]);
  const setStartTimeValue = (value: any) => {
    setTime(value);
  };
  const setEndTimeValue = (value: any) => {
    setEndTime(value);
  };
  return { startTime, setStartTimeValue, endTime, setEndTimeValue };
};

export const useSharedTimeState = () => useBetween(useTimeState);
