import React, { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';
import { getTimers } from '../API';

/**
 * Displays the current total time elapsed for a particular timer [WIP]
 *
 * When a timer is started, an object is created and an API request is made, PUTTING the newly created object to the database.
 * The object will have a `startTime` value (a `new Date()` with the current time`).
 * This clock will remain running until it is stopped via a button press, after which an `endTime` value will be appended to the
 * object (a `new Date()` with the current time upon stopping the timer).
 *
 *
 * @constructor
 */

// getTimers()
//     .then((timers: any) => {
//         timers.data.forEach((el: any) => {
//             el.timers.forEach((timeObj: any) => {
//                 const startTime = new Date (timeObj.startTime);
//                 const endTime = new Date (timeObj.endTime);
//                 const dif = differenceInSeconds(endTime, startTime);
//                 console.log(dif);
//                 fetchedTimes.push(dif);
//             })
//         })
//     })

export const Clock: React.FC = () => {

    const [difference, setDifference] = useState('');
    const fetched = new Date('February 16, 2021 14:08:50');
    const fetchedTimes: Array<number> = [];

    useEffect(() => {
        getTimers()
            .then((timers: any) => {
                timers.data.forEach((el: any) => {
                    el.timers.forEach((timeObj: any) => {
                        const startTime = new Date (timeObj.startTime);
                        const endTime = new Date (timeObj.endTime);
                        const dif = differenceInSeconds(endTime, startTime);
                        fetchedTimes.push(dif);
                    })
                })
            })
    }, [])


    useEffect(() => {
        const interval = setInterval(() => {
            const current = new Date();
            const dif = differenceInSeconds(current, fetched);
            let days = Math.trunc(dif / 86400);
            let hours = Math.trunc(dif % (3600*24) / 3600);
            let minutes = Math.trunc(dif % 3600 / 60);
            let seconds = Math.trunc(dif % 60);
            let timeString = ` ${days} : ${hours} : ${minutes} : ${seconds}`;
            setDifference(timeString)
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <span>
            {difference}
        </span>
    )

}

