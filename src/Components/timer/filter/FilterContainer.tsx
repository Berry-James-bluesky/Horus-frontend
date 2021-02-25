import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { useBetween } from "use-between";
import { Checkbox, Button, Icon } from "semantic-ui-react";
import { useSharedTimerState } from "../TimerContainer";
import { TextField } from "@material-ui/core";
import { useSharedFilterState } from "./functions/sharedFilterState";
import Pyramids from "../../../imgs/sidebar-topper.jpg";
import "./FilterContainer.scss";

/**
 * Stores rendered { Filter } components
 * @constructor
 */

export const FilterContainer = () => {
  const { filterParams, setFilterParams } = useSharedFilterState();
  const { timerView, setTimerView, timerModel } = useSharedTimerState();

  // set mobile-toggle state
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = (e: React.MouseEvent) => {
    setIsVisible(!isVisible);
  };

  const barStatus = isVisible ? "filter-timer-visible" : "filter-timer-hidden";
  const btnStatus = isVisible ? "text-secondary" : "text-black";

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
    <>
      <button
        onClick={handleIsVisible}
        className={`static fixed z-50 right-4 top-4 md:hidden text-white rounded-md text-xl ${btnStatus}`}
      >
        <Icon name={"options"} />
      </button>
      <div
        className={`w-full h-20 bg-white flex justify-start flex-row items-center mb-12 md:p-6 border-l-8 border-secondary mt-12 ${barStatus}`}
      >
        <div
          className={
            "block md:hidden w-full flex items-center justify-start pl-4 filters-header"
          }
          style={{ backgroundImage: `url(${Pyramids})` }}
        >
          <h2>Filters</h2>
        </div>
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
    </>
  );
};
