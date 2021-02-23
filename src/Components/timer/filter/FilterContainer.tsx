import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { useBetween } from "use-between";
import { Checkbox, Button } from "semantic-ui-react";
import { useSharedTimerState } from "../TimerContainer";
import { TextField } from "@material-ui/core";
import { useSharedFilterState } from "./functions/sharedFilterState";
import "./FilterContainer.scss";

/**
 * Stores rendered { Filter } components
 * @constructor
 */

export const FilterContainer = () => {
  const { filterParams, setFilterParams } = useSharedFilterState();
  const { timerView, setTimerView, timerModel } = useSharedTimerState();

  // runs every time the filterParams state changes
  useEffect(() => {
    // runs the filterTimers function
    filterTimers();
  }, [filterParams]);

  // sets the 'name' key to the passed value from search bar
  const filterByWord = (value: any) => {
    setFilterParams({ ...filterParams, name: value });
  };

  // filters the timers by the filter params state
  const filterTimers = () => {
    let filteredResults = timerModel;
    // if there are filters set
    if (filterParams) {
      // get each entry/value pair from the filterParams state and run forEach loop ---- filters loop until all params are applied
      Object.entries(filterParams).forEach((filter: any) => {
        //console.log("FILTER IS", filter);
        // set the key to the entry's first value
        const key: string = filter[0];
        // set the value to the entry's second value
        const value: string = filter[1];
        // filter the timers by if the object filter key is equal to the filter value OR the filter key value includes the value (searchbar keywords)
        let result: any = filteredResults.filter(
          (obj: any) => obj[key] === value || obj[key].includes(value)
        );
        //console.log("result is ", result);
        // set the filteredResults variable to the results of the filter
        filteredResults = result;
      });
      // set the view to the filtered timers
      setTimerView(filteredResults);
    }
  };

  return (
    <div className="w-full h-20 bg-white flex justify-start flex-row items-center mb-12 p-6 border-l-8 border-secondary mt-12">
      <Checkbox label="Active" />
      <TextField
        className="searchbar"
        label="Search Tasks"
        onKeyUp={(e: any) => {
          filterByWord(e.target.value.toLowerCase());
        }}
      />
      <Filter isType="assignedTo" filter={filterTimers} />
      <Filter isType="client" filter={filterTimers} />
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
