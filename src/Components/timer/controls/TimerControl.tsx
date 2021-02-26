import React, { useState } from 'react';
import TimerCreate from './TimerCreate';
import './TimerControl.scss';
import { Modal } from '../../modal/Modal';

const TimerControl = () => {

    const [showBar, setShowBar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShowBar = () => {
        setShowBar(!showBar)
    };

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const content = (
        <TimerCreate />
    )

    const barStatus = showBar ? 'add-timer-visible' : 'add-timer-hidden';
    const btnStatus = showBar ? 'bg-secondary' : 'bg-gray-200';

    return(
        <>
            <button onClick={handleShowModal} className={`static text-white pl-6 pr-6 pt-2 pb-2 rounded-md text-md add-timer-btn w-2/12 h-20 ml-8 ${btnStatus}`}>Add Timer</button>
            <Modal content={content} title={'Add a Timer'} active={showModal} closeModal={handleShowModal} />
            <div className={`${barStatus} add-timers w-100 flex mt-8 p-6 justify-between items-center border-l-8 border-secondary flex-wrap`}>
                <TimerCreate />
            </div>
        </>
    )

}

export default TimerControl