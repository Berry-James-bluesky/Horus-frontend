import React, { useState, useEffect } from 'react';
import { Total } from './Total';
import { getTimers } from '../../API';

const CalcContainer = () => {

    const [timerData, setTimerData] = useState();

    useEffect(() => {
        getTimers()
            .then((timers: any) => {
                setTimerData(timers);
            })
    }, []);

    return(
        <Total />
    )

}

export default CalcContainer
