import React, { useState, useEffect } from "react";
import { Form, Input, Checkbox } from "semantic-ui-react";
import AddButton from "./AddButton";
import { Notify } from "../../notify/Notify";
import { TimeTracker } from "./TimeTracker";
import { useSharedTimeState } from "./functions/sharedTimeState";
import { useSharedTimerState } from "../TimerContainer";
import { postTimer, getTimers } from "./../../API";
import { useSharedTimerDataState } from "../../chart/functions/sharedTimerDataState";
import './TimerCreate.scss';

/**
 * [INCOMPLETE - no data is sent to backend and no new timer object is created.  Data is currently being set to state timerData and console logged for proof of concept.  Time tracker does not function correctly and no time data is logged)
 * Creates a new timer and a new { timerObj }
 * Uses semantic UI form, input and checkbox components
 *
 * @constructor
 */

const TimerCreate = (props: { current: boolean }) => {
  const {
    timerModel,
    setTimerModel,
    timerView,
    setTimerView,
  } = useSharedTimerState();
  const [timerData, setTimerData] = useState<ITimer | any>(null);
  /** Data taken from form fields and PUT to the backend */
  const [name, setName]: any = useState(null);
  const [user, setUser]: any = useState(null);
  const [client, setClient]: any = useState(null);
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
    if (timerData !== null) {
      postTimer(timerData).then((timer) => console.log(timer));
    }
  }, [timerData]);

  // useEffect(() => {
  //   setTimerData({
  //     ...timerData,
  //     billable: isBillable,
  //   });
  // }, [isBillable]);

  const handleTimerName = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
    console.log(name);
  };

  const handleTimerAssigned = (e: React.FormEvent<HTMLInputElement>): void => {
    setUser(e.currentTarget.value);
    console.log(user);
  };

  const handleTimerClient = (e: React.FormEvent<HTMLInputElement>): void => {
    setClient(e.currentTarget.value);
    console.log(client);
  };

  const handleTimerAdd = () => {
    if (!name || !user || !client) {
      setNotifyMsg("Please enter all fields");
      console.log("enter all fields");
      setIconState("close");
      setShowNotify(true);
      setTimeout(
        function () {
          setShowNotify(false);
        }.bind(this),
        4000
      );
    } else if (!props.current) {
      if (Date.parse(startTime) < Date.parse(endTime)) {
        setTimerData({
          name: name,
          assignedTo: user,
          client: client,
          startTime: startTime,
          endTime: endTime,
          isBillable: isBillable,
        });
        setNotifyMsg("Timer successfully added");
        console.log("successfully added");
        setIconState("check");
        setShowNotify(true);
        setTimeout(
          function () {
            setShowNotify(false);
          }.bind(this),
          4000
        );
      } else {
        console.log("Start date must be before end date");
      }
    } else {
      const currentTime = new Date();
      setTimerData({
        name: name,
        assignedTo: user,
        client: client,
        startTime: currentTime,
        isBillable: isBillable,
      });
    }
  };

  return (
    <>
      <div className={'add-timer-wrapper'}>
        <Form.Field className="flex flex-col items-start w-full add-timer-form">
          <div className="flex flex-col items-start text-gray-500 ml-6 mb-6 w-full">
            <label className={'text-white'}>Project Name</label>
            <Input type="text" onChange={handleTimerName} className={'add-timer-input'}/>
          </div>

          <div className="flex flex-col items-start text-gray-500 ml-6 mb-6 w-full">
            <label className={'text-white'}>User</label>
            <Input type="text" onChange={handleTimerAssigned} className={'add-timer-input'} />
          </div>

          <div className="flex flex-col items-start text-gray-500 ml-6 mb-6 w-full">
            <label className={'text-white'}>Client</label>
            <Input type="text" onChange={handleTimerClient} className={'add-timer-input'}/>
          </div>

          <div>{!props.current ? <TimeTracker /> : null}</div>

          <Form.Field label="Billable?" className={'ml-6 text-white'}/>
            <Checkbox
              checked={isBillable}
              onChange={(e: any) => {
                setIsBillable((initialValue: any) => !initialValue);
              }}
              inputprops={{ "aria-label": "primary checkbox" }}
              className={'ml-6'}
            />
        </Form.Field>
        <AddButton
          addTimer={(e: React.FormEvent<HTMLInputElement>) => {
            handleTimerAdd();
          }}
          isDisabled={timerData === undefined ? true : false}
        />
      </div>
      <Notify isVisible={showNotify} text={notifyMsg} icon={iconState} />
    </>
  );
};

export default TimerCreate;
