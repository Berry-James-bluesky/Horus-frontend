import React, { useState } from 'react';
import TimerCreate from './TimerCreate';
import './TimerControl.scss';

const TimerControl = () => {

    const [showBar, setShowBar] = useState(false);

    const handleShowBar = () => {
        setShowBar(!showBar)
    };

    const barStatus = showBar ? 'add-timer-visible' : 'add-timer-hidden';
    const btnStatus = showBar ? 'bg-secondary' : 'bg-gray-200';

    return(
        <>
            <button onClick={handleShowBar} className={`static md:hidden text-white pl-6 pr-6 pt-2 pb-2 rounded-md text-md ${btnStatus}`}>Add Timer</button>
            <div className={`${barStatus} w-100 bg-white shadow-sm flex mt-8 p-6 justify-between items-center border-l-8 border-secondary flex-wrap`}>
                <TimerCreate />
            </div>
        </>
    )

}

export default TimerControl