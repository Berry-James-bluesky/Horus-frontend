import React, { useState } from "react";
import { Filter } from "./Filter";
import { useBetween } from "use-between";
import { Checkbox, Button } from "semantic-ui-react";
import { useSharedTimerState } from "../TimerContainer";
import { TextField } from "@material-ui/core";
import { useSharedFilterState } from "./functions/sharedFilterState";

/**
 * Stores rendered { Filter } components
 * @constructor
 */

export const FilterContainer = () => {
  const { filterParams, setFilterParams } = useSharedFilterState();
  const { timerView, setTimerView, timerModel } = useSharedTimerState();

  const filterTimers = (key: any, input: any) => {
    let filterArray: any = [];
    let result: any = "";
    let timerData: any = [];
    // if the input is user (user dropdown)
    if (input === "user") {
      let timers = timerModel;
      filterArray = filterParams;
      filterArray["assignedTo"] = key;
      // set state of filter to include user param
      setFilterParams(filterArray);
      // if the filter has a client param
      if (filterParams.client) {
        // set timers to only the timers that are for that client
        timers = timerModel.filter(
          (obj: any) => obj.client === filterParams.client
        );
        console.log("client filter is", timers);
      }
      // set result to timers that either match the key user OR the array of users includes the timers.user value
      result = timers.filter(
        (obj: any) => obj.assignedTo === key || key.includes(obj.assignedTo)
      );
    }
    // if the input is 'client' (client dropdown)
    if (input === "client") {
      // set timers to the timers in the model
      filterArray = filterParams;
      let timers = timerModel;
      filterArray["client"] = key;
      setFilterParams(filterArray);
      // if there is a user filter param
      if (filterParams.assignedTo) {
        // set timers to timers where the user is equal to the filter user param
        timers = timerModel.filter(
          (obj: any) => obj.assignedTo === filterParams.assignedTo
        );
      }
      // set the result to the timer (already filtered by other params) that has the input client value
      result = timers.filter((obj: any) => obj.client === key);
    }
    // if the input is a keyword (searchbar)
    if (input === "keyword") {
      // set timers to the timers in the model
      let timers = timerModel;
      // if there is a user param and a client param in the filter state
      if (filterParams.assignedTo && filterParams.client) {
        // set timers to timers where the 'client' value and the 'user' value are equal to the filter params
        timers = timerModel.filter(
          (obj: any) =>
            (obj.client === filterParams.client ||
              filterParams.client.includes(obj.client)) &&
            (obj.assignedTo === filterParams.assignedTo ||
              filterParams.assignedTo.includes(obj.assignedTo))
        );
      }
      // else if the filter only has a user filter
      else if (filterParams.assignedTo) {
        // find timers that match the user filter param
        timers = timerModel.filter(
          (obj: any) =>
            obj.assignedTo === filterParams.assignedTo ||
            filterParams.assignedTo.includes(obj.assignedTo)
        );
      }
      // else if there is only a client param
      else if (filterParams.client) {
        // set timers to the timers that match the client filter param
        timers = timerModel.filter(
          (obj: any) => obj.client === filterParams.client
        );
      }

      // set result to all the timers (already filtered by user dropdown/client value) that include the search keyword/letters
      result = timers.filter((obj: any) =>
        obj.name.toLowerCase().includes(key)
      );
    }
    // set the todos in the formData to the filtered todos
    timerData = result;
    console.log("TIMER DATA", timerData);
    // console.log('result is', result);

    // set the view state to the formData array
    setTimerView(timerData);
  };

  return (
    <div className="w-full h-20 bg-white flex justify-start flex-row items-center mb-12 p-6 border-l-8 border-secondary mt-12">
      <Checkbox label="Active" />
      <TextField
        className="searchbar"
        label="Search Tasks"
        onKeyUp={(e: any) => {
          filterTimers(e.target.value.toLowerCase(), "keyword");
        }}
      />
      <Filter isType="User" filter={filterTimers} />
      <Filter isType="Client" filter={filterTimers} />
      <Button
        onClick={() => {
          setTimerView(timerModel);
          setFilterParams([]);
        }}
      >
        Reset Filters
      </Button>
    </div>
  );
};
