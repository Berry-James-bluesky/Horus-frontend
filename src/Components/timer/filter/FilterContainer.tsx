import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { Checkbox, Button, Icon } from "semantic-ui-react";
import { useSharedTimerState } from "../TimerContainer";
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

  // set dialog box state
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  // handler for toggling mobile state
  const handleIsVisible = (e: React.MouseEvent) => {
    setIsVisible(!isVisible)
  }

  // handler for toggling dialog box state
  const handleDialogBox = () => {
    setIsDialogVisible(!isDialogVisible);
  }

  // Classes assigned to determine filter dialog box visibility
  const filtersStatus = isDialogVisible ? 'filter-dialog-visible' : 'filter-dialog-hidden';
  const filterBtnStatus = isDialogVisible ? 'filter-btn-active' : '';

  // Classes assigned to determine filter sidebar visibility (MOBILE)
  const barStatus = isVisible ? 'filter-timer-visible' : 'filter-timer-hidden';
  const btnStatus = isVisible ? 'text-secondary' : 'text-black';

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
      <button onClick={handleIsVisible} className={`static fixed z-50 right-4 top-4 md:hidden text-white rounded-md text-xl ${btnStatus}`}><Icon name={'options'} /></button>
      <div className={`flex items-start flex-col justify-center mb-2 md:p-2 md:pl-6 border-l-8 border-secondary mt-2 timer-filter-container ${barStatus}`}>
        <div className={'block md:hidden w-full flex items-center justify-start pl-4 filters-header'} style={{backgroundImage: `url(${Pyramids})`}}><h2>Filters</h2></div>
       <div className={'flex items-center w-full'}>
        <div className={'show-filters-container'}>
          <button onClick={handleDialogBox} className={`filters-icon-btn ${filterBtnStatus}`}><Icon name={'filter'}/></button>
        </div>
           <div className={'searchbar-container w-full'}>
               <Icon name={'search'}/>
               <input
                   className="searchbar"
                   placeholder="Search"
                   onKeyUp={(e: any) => {
                       filterByWord(e.target.value.toLowerCase());
                   }}
               />
           </div>
       </div>
        <div className={`filters-dialog ${filtersStatus}`}>
          <Filter isType="assignedTo" filter={filterTimers} />
          <Filter isType="client" filter={filterTimers} />
          <Checkbox label="Active" />
          <button className={'styled-button'}
                  onClick={() => {
                    setTimerView(timerModel);
                    setFilterParams([]);
                  }}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};
