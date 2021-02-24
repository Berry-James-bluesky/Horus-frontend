import React, { useState } from "react";
import { ChartFilterItem } from "./ChartFilterItem";
import { Icon } from "semantic-ui-react";
import "./ChartFilter.scss";
import { useSharedChartState } from "../../../pages/Statistics";

/**
 * Component for filtering displayed chart results
 *
 * @component
 *
 * @param {string[]}
 *
 */

interface Props {
  chartType: string;
}

export const ChartFilter = (props: Props) => {
  const [active, setActive] = useState("chart-filters-active");

  const {
    chartType,
    setChartType,
    chartName,
    setChartName,
  } = useSharedChartState();

  const chartTypes = [
    { name: "All Users", type: "assignedTo", icon: "user" },
    { name: "All Clients", type: "client", icon: "briefcase" },
    { name: "All Projects", type: "project", icon: "lightbulb" },
  ];

  const chartSet = (e: any) => {
    setChartType(e.target.value);
    setChartName(e.target.innerText);
    console.log(chartType);
  };

  const filters = chartTypes.map((filter) => (
    <ChartFilterItem
      buttonName={filter.name}
      value={filter.type}
      iconName={filter.icon}
      clickEvent={chartSet}
    />
  ));

  let theClass = active.toString();

  return (
    <div
      className={
        "w-64 h-full relative top-0 bg-white flex flex-col justify-start items-start flex-row items-center mb-12 pl-4 pr-4 border-r-2 chart-filter" +
        " " +
        theClass
      }
    >
      <div className="pt-4">
        <button
          className="arrow-btn"
          onClick={() => {
            active === "chart-filters-active"
              ? setActive("chart-filters-hidden")
              : setActive("chart-filters-active");
          }}
        >
          <Icon name="arrow left" />
        </button>
      </div>
      <div className="flex flex-col h-screen items-center w-full filter-icon-container">
        <div className="filter-header">
          <h3 className="text-white filters-title">Filters</h3>
          <Icon name="options" />
        </div>
        <div className="grid grid-col-3 w-full">{filters}</div>
      </div>
    </div>
  );
};
