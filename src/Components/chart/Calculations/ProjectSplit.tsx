import React, { useState, useEffect } from "react";
import Graph from "../Graph";
import { differenceInSeconds } from "date-fns";
import { useSharedChartState } from "../functions/sharedChartState";
import { useSharedTimerDataState } from "../functions/sharedTimerDataState";
import { useBetween } from "use-between";

/**
 * Returns a graph with the total split of hours between each client.
 */

const useFetchedData = () => {
  const [fetchedData, setData] = useState<Array<number>>([]);
  const [fetchedLabels, setLabels] = useState<Array<string>>([]);
  const setFetchedData = (value: any) => {
    setData(value);
  };
  const setFetchedLabels = (value: any) => {
    setLabels(value);
  };
  return { fetchedData, setFetchedData, fetchedLabels, setFetchedLabels };
};

export const useSharedFetchedData = () => useBetween(useFetchedData);

export const ProjectSplit = () => {
  const {
    chartType
  } = useSharedChartState();

  const { timerData, graphStyle } = useSharedTimerDataState();

  const splitBy = `el.${chartType}`;

  /**
   * @typedef
   */
  interface ISplitObj {
    name: any;
    total: any;
  }

  // set states for storing final label and data arrays
  //   const [fetchedData, setFetchedData] = useState<Array<number>>([]);
  //   const [fetchedLabels, setFetchedLabels] = useState<Array<string>>([]);
  const {
    fetchedData,
    setFetchedData,
    fetchedLabels,
    setFetchedLabels,
  } = useSharedFetchedData();

  useEffect(() => {
    const finalData: Array<ISplitObj> = [];

    const fetchedSplit = new Set();

    // loop through timers and add each 'property to split by' to the set
    timerData.data.forEach((el: any) => {
      fetchedSplit.add(eval(splitBy));
    });

    // loop through set of split properties and create an object for each
    fetchedSplit.forEach((splitName) => {
      let splitObj: ISplitObj = {
        name: splitName,
        total: 0,
      };
      // push each of these objects to [finalData] array
      finalData.push(splitObj);
    });

    // Loop through each timer entry
    timerData.data.forEach((el: any) => {
      // define a variable to add the calculated times to
      let timeTotal = 0;

      // Loop through the clock on/off values in each timer object
      el.timers.forEach((timeObj: any) => {
        // get start and finish times and assign to variables
        const startTime = new Date(timeObj.startTime);
        const endTime = new Date(timeObj.endTime);
        // calc difference between start + fin times
        const dif = differenceInSeconds(endTime, startTime);
        // convert to hours
        const hrs = Math.floor(dif / 3600);
        // add to timeTotal variable
        timeTotal = timeTotal + hrs;
      });

      // Loop through each client name in [finalData] array
      finalData.forEach((clientObj) => {
        // if the name shown in the finalData array is equal to the client name in the primary loop...
        // add its 'timeTotal' value to the clientObj.total int
        if (clientObj.name === eval(splitBy)) {
          clientObj.total = clientObj.total + timeTotal;
        }
      });
    });

    const finalLabels: Array<string> = [];
    const finalTimes: Array<number> = [];
    // Loop through final data and split into two separate arrays
    finalData.forEach((el) => {
      finalLabels.push(el.name);
      finalTimes.push(el.total);
    });

    // set both states for render
    setFetchedData(finalTimes);
    setFetchedLabels(finalLabels);
  }, [splitBy]);

  return <Graph />;
};
