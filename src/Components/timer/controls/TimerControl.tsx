import React, { useState } from 'react';
import TimerCreate from './TimerCreate';
import { Modal } from '../../modal/Modal';
import { Button } from "@material-ui/core";
import "./TimerControl.scss";

const TimerControl = () => {

    const [showModal, setShowModal] = useState(false);
    const [timerType, setTimerType] = useState(true);

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const tabClass = timerType ? 'switch-btn-left' : 'switch-btn-right';

    const inactiveType = timerType ? 'Add Past Time' : 'Add New Timer';

    const tabType = timerType ? 'tab-left' : 'tab-right';

    const content = (
        <div>
            <div className={'modal-tab'}>
                <button

                    className={`switch-btn text-white text-xl ${tabClass}`}
                >
                    {!timerType ? "Add Past Time" : "Add New Timer"}
                </button>
                <button
                    className={`inactive-tab text-white text-xl ${tabType}`}
                    onClick={(initialValue: any) =>
                        setTimerType((initialValue) => !initialValue)
                    }
                >
                    {inactiveType}
                </button>
            </div>
            <TimerCreate current={timerType}/>
        </div>
    )

  return (
    <>
        <button onClick={handleShowModal} className={'add-timer-btn'}>Add Timer</button>
        <Modal content={content} title={'Add a Timer'} active={showModal} closeModal={handleShowModal} />
    </>
  );
};



export default TimerControl