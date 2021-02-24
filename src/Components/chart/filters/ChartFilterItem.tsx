import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useSharedChartState } from "../functions/sharedChartState";

interface Props {
  buttonName: string;
  iconName: any;
  value: any;
}

export const ChartFilterItem = (props: Props) => {
  const {
    chartType,
    setChartType,
    chartName,
    setChartName,
  } = useSharedChartState();

  const chartSet = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    setChartType(e.currentTarget.value);
    setChartName(e.currentTarget.innerText);
  };

  return (
    <button
      className="w-full flex items-center justify-center chart-filter-btn"
      onClick={chartSet}
      value={props.value}
    >
      <span className="filter-btn-txt font-sans">{props.buttonName}</span>
      <Icon name={props.iconName} className="filter-btn-icon" />
    </button>
  );
};
