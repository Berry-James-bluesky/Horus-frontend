import React, { useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import "./TimeTracker.scss";
import { useSharedTimeState } from "./functions/sharedTimeState";

/**
 * Used to select a time duration to add to a project timer
 * uses the 'react-time-picker' component
 *
 * @constructor
 */

export const TimeTracker = () => {
  const {
    startTime,
    setStartTimeValue,
    endTime,
    setEndTimeValue,
  } = useSharedTimeState();

  useEffect(() => {
    setStartTimeValue(null);
    setEndTimeValue(null);
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-start text-gray-500 ml-6 mr-6">
        <label>Start Date:</label>
        <DateTimePicker
          maxDetail="second"
          value={startTime}
          onChange={(e: any) => setStartTimeValue(e)}
        />
      </div>
      <div className="flex flex-col items-start text-gray-500 ml-6 mr-6">
        <label>End Date:</label>
        <DateTimePicker
          maxDetail="second"
          value={endTime}
          onChange={(e: any) => setEndTimeValue(e)}
        />
      </div>
    </div>
  );
};
