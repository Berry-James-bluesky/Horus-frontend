import React from 'react';
import TimerCreate from './TimerCreate';


const TimerControl = () => {


    return(
        <div className="w-100 bg-white shadow-sm flex mt-8 p-6 justify-between items-center border-l-8 border-secondary">
            <TimerCreate></TimerCreate>
        </div>
    )

}

export default TimerControl

