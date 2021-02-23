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

  useEffect(() => {
    filterTimers();
  }, [filterParams]);

  const filterTimers = () => {
    let filteredResults = timerModel;
    if (filterParams) {
      Object.entries(filterParams).forEach((filter: any) => {
        console.log(filter);
        // console.log(filter);
        const key: string = filter[0];
        const value: string = filter[1];
        let result: any = filteredResults.filter(
          (obj: any) => obj[key] === value
        );
        console.log("result is ", result);
        filteredResults = result;
      });
      setTimerView(filteredResults);
    }
  };

  return (
    <div className="w-full h-20 bg-white flex justify-start flex-row items-center mb-12 p-6 border-l-8 border-secondary mt-12">
      <Checkbox label="Active" />
      <TextField
        className="searchbar"
        label="Search Tasks"
        // onKeyUp={(e: any) => {
        //   filterTimers(e.target.value.toLowerCase(), "keyword");
        // }}
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
