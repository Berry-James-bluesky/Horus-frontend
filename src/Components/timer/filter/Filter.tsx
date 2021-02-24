import React, { useState, useEffect } from "react";
import Select from "react-select";
import test from "../../../test.json";
import { useSharedTimerState } from "../TimerContainer";
import { useSharedFilterState } from "./functions/sharedFilterState";

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
    if (filterType === "Project Name") {
      /** Loop through each item in fetched data (test in this case) */
      test.forEach((item) => {
        let filterObj = {
          value: "",
          label: "",
        };
        /** set filterObj 'value' and 'label' to corresponding value from fetched data (in this case, the name is assigned as this is a 'Project Name' filter) */
        filterObj.value = item.name;
        filterObj.label = item.name;
        /** Push newly created filterObj to the filterOptions array (to be displayed in the react-select dropdown) */
        filterOptionsArray.push(filterObj);
        //console.log('the options are', filterOptions)
      });
    }

    if (filterType === "assignedTo") {
      test.forEach((item) => {
        let filterObj = {
          value: "",
          label: "",
        };
        filterObj.value = item.assignedTo;
        filterObj.label = item.assignedTo;
        filterOptionsArray.push(filterObj);
      });
    }

    if (filterType === "client") {
      test.forEach((item) => {
        let filterObj = {
          value: "",
          label: "",
        };
        filterObj.value = item.client;
        filterObj.label = item.client;
        filterOptionsArray.push(filterObj);
      });
    }
    setFilterOptions(filterOptionsArray);
  };

  useEffect(() => {
    /** set the filterType state to passed isType prop */
    setFilterType(props.isType);
    /** fetch data and assign it to dropdown */
    getData();
  }, []);

  useEffect(() => {
    if (!filterParams.user && !filterParams.client) {
    }
  }, [timerView]);

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
    <div className="w-60 ml-6 mr-6">
      <Select
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
