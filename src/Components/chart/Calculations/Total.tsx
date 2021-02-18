import React, {useEffect, useState} from 'react';
import {differenceInSeconds} from "date-fns";
import { getTimers } from '../../API';
import Graph from '../Graph';

export const Total = () => {

    const [fetchedData, setFetchedData] = useState<Array<number>>([]);
    const [fetchedLabels, setFetchedLabels] = useState<Array<string>>([]);

    useEffect(() => {
        getTimers()
            .then((timers: any) => {

                // the following arrays are sent directly to the chart.js charts and MUST align
                const fetchedTimes: Array<number> = [];
                const fetchedLabels: Array<string> = [];

                // loop through timers
                timers.data.forEach((el: any) => {
                    // define variable for adding up all timers
                    let timeTotal = 0;
                    // push each timer name to fetchedLabels array
                    fetchedLabels.push(el.name);
                    // loop through timer objects
                    el.timers.forEach((timeObj: any) => {
                        // get start and finish times and assign to variables
                        const startTime = new Date (timeObj.startTime);
                        const endTime = new Date (timeObj.endTime);
                        // calc difference between start + fin times
                        const dif = differenceInSeconds(endTime, startTime);
                        // convert to hours
                        const hrs = Math.floor(dif / 3600);
                        // add to timeTotal variable
                        timeTotal = timeTotal + hrs;
                    });
                    // finally, push all times to fetchedTimes array for display in chart
                    fetchedTimes.push(timeTotal);
                })
                // set both states for render
                setFetchedData(fetchedTimes);
                setFetchedLabels(fetchedLabels);
            })
    }, []);

    return(
    <>
        <Graph graphType='pie' graphLabels={fetchedLabels} graphData={fetchedData} graphName='All Timers' />
        <Graph graphType='bar' graphLabels={fetchedLabels} graphData={fetchedData} graphName='All Timers' />
    </>
    )

}