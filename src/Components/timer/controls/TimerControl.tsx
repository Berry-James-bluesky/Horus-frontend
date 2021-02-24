import { Button } from "@material-ui/core";
import React, { useState } from "react";
import TimerCreate from "./TimerCreate";

const TimerControl = () => {
  const [timerType, setTimerType] = useState(true);
  return (
    <div className="w-100 bg-white shadow-sm flex mt-8 p-6 justify-left items-center border-l-8 border-secondary">
      <Button
        onClick={(initialValue: any) =>
          setTimerType((initialValue) => !initialValue)
        }
      >
        switch
      </Button>
      <TimerCreate current={timerType}></TimerCreate>
    </div>
  );
};

export default TimerControl;
