import React, { useState } from "react";
import { ChartFilterItem } from "./ChartFilterItem";
import { Icon } from "semantic-ui-react";
import "./ChartFilter.scss";
import { useSharedChartState } from "../functions/sharedChartState";
import Pyramid from '../../../imgs/sidebar-topper.jpg';

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

  // Control sidebar status on mobile
  const [isVisible, setIsVisible] = useState(false);
  const barStatus = isVisible ? 'chart-filters-mobile-visible' : 'chart-filters-mobile-hidden';

  const handleVisible = () => {
    setIsVisible(!isVisible);
  }

  const chartTypes = [
    { name: "All Users", type: "assignedTo", icon: "user" },
    { name: "All Clients", type: "client", icon: "briefcase" },
    { name: "All Projects", type: "project", icon: "lightbulb" },
  ];

  const filters = chartTypes.map((filter) => (
    <ChartFilterItem
      buttonName={filter.name}
      value={filter.type}
      iconName={filter.icon}
    />
  ));

  let theClass = active.toString();

  return (
      <>
      <button onClick={handleVisible} className={'filter-toggle-button block md:hidden'}><Icon name={'options'} /></button>
      <div
        className={
          `w-64 h-full relative top-0 flex flex-col justify-start items-start flex-row items-center mb-12 pl-4 pr-4 chart-filter ${theClass} ${barStatus}`
        }
      >
        <div className="pt-4 hidden md:block">
          <button
            className="arrow-btn md:inline hidden"
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
          <div className="filter-header" style={{backgroundImage: `url(${Pyramid})`}}>
            <h2 className="text-white filters-title">Filters</h2>
            <Icon name="options" className={'filters-icon'}/>
          </div>
          <div className="grid grid-col-3 w-full">{filters}</div>
        </div>
      </div>
    </>
  );
};
