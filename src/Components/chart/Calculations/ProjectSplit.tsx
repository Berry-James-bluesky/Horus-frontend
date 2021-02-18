import React, { useState, useEffect } from 'react';
import Graph from '../Graph'
import {differenceInSeconds} from "date-fns";

/**
 * Returns a graph with the total split of hours between each client.
 * I plan to make this work to also filter between assigned developers and project names.
 */

interface Props {
    data: any
    splitName: string
    splitBy: string
    /** PLEASE START THIS STRING WITH .el (i.e. el.client)*/
}

export const ProjectSplit = (props: Props) => {

    /**
     * @typedef
     */
    interface ISplitObj {
        name: any
        total: any
    }

    // set states for storing final label and data arrays
    const [fetchedData, setFetchedData] = useState<Array<number>>([]);
    const [fetchedLabels, setFetchedLabels] = useState<Array<string>>([]);

    useEffect(() => {
        const finalData: Array<ISplitObj> = [];

        // the following arrays are sent directly to the chart.js charts and MUST align
        const fetchedTimes: Array<number> = [];
        const fetchedSplit = new Set();

        // loop through timers and add each 'property to split by' to the set
        props.data.data.forEach((el: any) => {
            fetchedSplit.add(eval(props.splitBy))
        });

        // loop through set of split properties and create an object for each
        fetchedSplit.forEach(splitName => {
            let splitObj: ISplitObj = {
                "name": splitName,
                "total": 0
            }
            // push each of these objects to [finalData] array
            finalData.push(splitObj);
        });

        // Loop through each timer entry
        props.data.data.forEach((el: any) => {

            // define a variable to add the calculated times to
            let timeTotal = 0;

            // Loop through the clock on/off values in each timer object
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

            // Loop through each client name in [finalData] array
            finalData.forEach(clientObj => {
                // if the name shown in the finalData array is equal to the client name in the primary loop...
                // add its 'timeTotal' value to the clientObj.total int
                if(clientObj.name === eval(props.splitBy)) {
                    clientObj.total = clientObj.total + timeTotal
                };
            });
            console.log(finalData);
        });

        const finalLabels: Array<string> = [];
        const finalTimes: Array<number> = [];
        // Loop through final data and split into two separate arrays
        finalData.forEach(el => {
            finalLabels.push(el.name);
            finalTimes.push(el.total);
        });

        // set both states for render
        setFetchedData(finalTimes);
        setFetchedLabels(finalLabels);

    }, [])

    return(
        <Graph
            graphType={'pie'}
            graphData={fetchedData}
            graphLabels={fetchedLabels}
            graphName={props.splitName}
        />
    )

}