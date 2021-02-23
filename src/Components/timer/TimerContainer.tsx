import React, { useState, useEffect } from "react";
import { TimerObj } from "./TimerObj";
import "./TimerContainer.scss";
import { getTimers } from "../API";
import Select from "react-select";
import { useBetween } from "use-between";

/**
 *
 * Contains timerObjs as direct children (currently being rendered from test data @ test.json)
 *
 * Card/list style defined by React-select dropdown box
 *
 * @constructor
 */

interface timerDataType {
  data: Array<object>;
}

const useTimerState = () => {
  const [timerModel, setModel] = useState<Array<timerDataType>>([]);
  const [timerView, setView] = useState<Array<timerDataType>>([]);
  const setTimerModel = (value: any) => {
    setModel(value);
  };
  const setTimerView = (value: any) => {
    setView(value);
  };
  return { timerModel, setTimerModel, timerView, setTimerView };
};

export const useSharedTimerState = () => useBetween(useTimerState);

const TimerContainer: React.FC = () => {
  // set states
  const [styleValue, setStyleValue] = useState("card");
  // const [fetchedTimers, setFetchedTimers] = useState<Array<timerDataType>>([]);
  const {
    timerModel,
    setTimerModel,
    timerView,
    setTimerView,
  } = useSharedTimerState();

  /**
   * @function
   * Get all stored timers from DB
   */

  useEffect(() => {
    getTimers().then((timers) => {
      // @ts-ignore
      setTimerModel(timers.data);
      console.log(timerModel);
    });
  }, []);

  useEffect(() => {
    setTimerView(timerModel);
  }, [timerModel]);

  // Define options for react-select dropdown
  const styleOptions = [
    {
      value: "card",
      label: "Card",
    },
    {
      value: "list",
      label: "List",
    },
  ];

  // change styleValue state on react-select option change
  const handleChange = (e: any) => {
    setStyleValue(e.value);
  };

  return (
    <>
      <Select
        options={styleOptions}
        onChange={handleChange}
        className="w-64 float-right m-8 mt-0"
      />
      <div className={`timer-container ${styleValue}-container`}>
        {timerView.map((data: any) => (
          <TimerObj
            key={data.name}
            timerName={data.name}
            timerClient={data.client}
            timerProject={data.project}
            timerStyle={styleValue}
            timerDate={data.time}
          />
        ))}
      </div>
    </>
  );
};

export default TimerContainer;
