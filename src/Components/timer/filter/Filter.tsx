import React, { useState, useEffect } from "react";
import Select from "react-select";
//import test from "../../../test.json";
import { useSharedTimerState } from "../TimerContainer";
import { useSharedFilterState } from "./functions/sharedFilterState";
import './Filter.scss';
import { getTimers } from "../../API";

/**
 * Multi-use dropdown-style filter powered by { react-select }
 * --
 * Filter types:
 * - Project Name
 * - User
 * - Client
 *
 * Filter type is determined by passed prop filterType
 */

interface Props {
  isType: string;
  filter?: any;
  /** type of filter to be displayed */
}

export const Filter: React.FC<Props> = (props: Props) => {
  const { filter } = props;

  const {
    timerModel,
    setTimerModel,
    timerView,
    setTimerView,
  } = useSharedTimerState();

  const [filterType, setFilterType]: any = useState(props.isType);
  /** value is set by props.isType */

  let filterOptionsArray: Array<object> = [];

  const [filterOptions, setFilterOptions]: any = useState(null);

  const { filterParams, setFilterParams } = useSharedFilterState();

  /** Function runs on first render, checks for passed props.isType */

  const getData = () => {
    /** Loop through each item in fetched data (test in this case) */
    getTimers().then((timers) => {
      //console.log(timers.data.data)
      timers.data.forEach((item: any) => {
        let filterObj = {
          value: "",
          label: "",
        };
        /** set filterObj 'value' and 'label' to corresponding value from fetched data (in this case, the name is assigned as this is a 'Project Name' filter) */
        filterObj.value = item[filterType];
        filterObj.label = item[filterType];
        /** Push newly created filterObj to the filterOptions array (to be displayed in the react-select dropdown) */
        filterOptionsArray.push(filterObj);
        //console.log('the options are', filterOptions)
      });
    });
    setFilterOptions(filterOptionsArray);
  };

  useEffect(() => {
    /** set the filterType state to passed isType prop */
    setFilterType(props.isType);
    /** fetch data and assign it to dropdown */
    getData();
  }, []);

  useEffect(() => {
    console.log("timers are", timerModel);
    console.log("timerView is", timerView);
    console.log("filter options are", filterOptions);
    console.log("filter is", filterParams);
  }, [timerView]);
  console.log("timerView is", timerView);

  useEffect(() => {
    console.log(filterParams);
  }, [filterParams]);

  return (
    <div className="w-60 ml-6 mr-6 filter-item">
      <Select
        styles={{menu: provided => ({...provided, zIndex: 50})}}
        className={'timer-filter-item'}
        placeholder={
          filterType === "assignedTo"
            ? "User"
            : filterType === "client"
            ? "Client"
            : filterType
        }
        options={filterOptions}
        isClearable={true}
        // on change the filter params are set to the previous filters + the filter type as a key and the event value as the value
        onChange={(e: any) => {
          if (e !== null) {
            setFilterParams({ ...filterParams, [filterType]: e.value });
          } else {
            setFilterParams({ ...filterParams, [filterType]: "" });
          }
        }}
      />
    </div>
  );
};
