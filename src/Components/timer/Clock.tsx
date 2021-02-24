import React, { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';
import { getTimers } from '../API';
import Convert from '../chart/Calculations/Conversions';
import './Clock.scss';
import Loader from '../../imgs/loader.svg';

/**
 * Displays the current total time elapsed for a particular timer [WIP]
 *
 * When a timer is started, an object is created and an API request is made, PUTTING the newly created object to the database.
 * The object will have a `startTime` value (a `new Date()` with the current time`).
 * This clock will remain running until it is stopped via a button press, after which an `endTime` value will be appended to the
 * object (a `new Date()` with the current time upon stopping the timer).
 *
 * @constructor
 */

export const Clock: React.FC = () => {

    const [difference, setDifference] = useState('');
    const [loading, setLoading] = useState(true);
    const fetched = new Date('February 16, 2021 14:08:50');

    useEffect(() => {
        const interval = setInterval(() => {
            const current = new Date();
            const dif = differenceInSeconds(current, fetched);
            let days = Convert.days(dif);
            let hours = Convert.hours(dif);
            let minutes = Convert.minutes(dif);
            let seconds = Convert.seconds(dif);
            let timeString = `${days} : ${hours} : ${minutes} : ${seconds}`;
            setDifference(timeString)
            if(loading){ setLoading(false) }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if(loading) {
        return(
            <span className={'clock'}>
                <img src={Loader} className={'h-6 w-6'}/>
            </span>
        )
    }

    return(
        <span className={'text-white clock'}>
            {difference}
        </span>
    )

}

