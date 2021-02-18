import React, { useState, useEffect } from "react";
import { Form, Input, Checkbox } from "semantic-ui-react";
import AddButton from "./AddButton";
import { Notify } from "../../notify/Notify";
import { TimeTracker } from "./TimeTracker";
import { useSharedTimeState } from "./functions/sharedTimeState";

/**
 * [INCOMPLETE - no data is sent to backend and no new timer object is created.  Data is currently being set to state timerData and console logged for proof of concept.  Time tracker does not function correctly and no time data is logged)
 * Creates a new timer and a new { timerObj }
 * Uses semantic UI form, input and checkbox components
 *
 * @constructor
 */

const TimerCreate = () => {
  const [timerData, setTimerData] = useState<ITimer | {}>({});
  /** Data taken from form fields and PUT to the backend */
  const [isBillable, setIsBillable] = useState(false);
  /** Billable checkbox value (as boolean) */
  const [showNotify, setShowNotify] = useState(false);
  /** state to be passed as a prop to { Notify } component (triggering its appearance)  */
  const [notifyMsg, setNotifyMsg] = useState("");
  const [iconState, setIconState] = useState("");
  const {
    startTime,
    setStartTimeValue,
    endTime,
    setEndTimeValue,
  } = useSharedTimeState();
  // shared state of time tracker component

  useEffect(() => {
    console.log("TIME VALUE:", startTime);
  }, [startTime]);

  useEffect(() => {
    console.log(timerData);
  }, [timerData]);

  const handleTimerName = (e: React.FormEvent<HTMLInputElement>): void => {
    setTimerData({
      ...timerData,
      name: e.currentTarget.value,
    });
    console.log(timerData);
  };

  const handleTimerAssigned = (e: React.FormEvent<HTMLInputElement>): void => {
    setTimerData({
      ...timerData,
      assignedTo: e.currentTarget.value,
    });
    console.log(timerData);
  };

  const handleTimerAdd = (e: React.FormEvent<HTMLInputElement>): void => {
    if (!(timerData.name || timerData.assignedTo)) {
      setNotifyMsg("Please enter all fields");
      setIconState("close");
      setShowNotify(true);
      setTimeout(
        function () {
          setShowNotify(false);
        }.bind(this),
        4000
      );
    } else {
      if (Date.parse(startTime) < Date.parse(endTime)) {
        setTimerData({
          ...timerData,
          startTime: startTime,
          endTime: endTime,
        });
        setNotifyMsg("Timer successfully added");
        setIconState("check");
        setShowNotify(true);
        setTimeout(
          function () {
            setShowNotify(false);
          }.bind(this),
          4000
        );
      } else {
        setNotifyMsg("End date must occur later than start date");
        setIconState("close");
        setShowNotify(true);
        setTimeout(
          function () {
            setShowNotify(false);
          }.bind(this),
          4000
        );
      }
    }
  };

  const handleBillable = (e: React.FormEvent<HTMLInputElement>): void => {
    if (!isBillable) {
      setIsBillable(true);
    } else {
      setIsBillable(false);
    }

    setTimerData({
      ...timerData,
      billable: isBillable,
    });
    console.log(timerData);
  };

  return (
    <>
      <Form.Field className="flex items-center">
        <div className="flex flex-col items-start text-gray-500 ml-6 mr-6">
          <label>Project Name</label>
          <Input type="text" onChange={handleTimerName} />
        </div>

        <div className="flex flex-col items-start text-gray-500 ml-6 mr-6">
          <label>User</label>
          <Input type="text" onChange={handleTimerAssigned} />
        </div>

        <div>
          <TimeTracker />
        </div>

        <Form.Field
          control={Checkbox}
          label="Billable?"
          onChange={handleBillable}
        />
      </Form.Field>
      <AddButton
        addTimer={handleTimerAdd}
        isDisabled={timerData === undefined ? true : false}
      />
      <Notify isVisible={showNotify} text={notifyMsg} icon={iconState} />
    </>
  );
};

export default TimerCreate;
