import React, { useState, useEffect } from "react";
import { ChartFilter } from "../Components/chart/filters/ChartFilter";
import "./Statistics.scss";
import CalcContainer from "../Components/chart/Calculations/CalcContainer";
import { useBetween } from "use-between";
import { useSharedChartState } from "../Components/chart/functions/sharedChartState";

export const Statistics: React.FC = () => {
  const {
    chartType,
    setChartType,
    chartName,
    setChartName,
  } = useSharedChartState();

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const handleGraphChange = (e: any) => {
    setChartType(e.target.value);
    console.log(chartType);
  };

  // const activeChart = () => {
  //     if(chartType === 'pie') {
  //
  //     }
  //     if(chartType === 'bar') {
  //         return(
  //             <BarGraph graphData={chartData} graphOptions={chartOptions}/>
  //         )
  //     }
  // };

  //   const chartSet = (e: any) => {
  //     if (e.target.value !== undefined) {
  //       setChartType(e.target.value);
  //       setChartName(e.target.innerText);
  //       console.log(chartType);
  //     }
  //   };

  return (
    <section className="stats-page-container flex relative">
      <ChartFilter chartType={chartType} />
      {/*<Button onClick={handleGraphChange} value='pie'>Pie</Button>*/}
      {/*<Button onClick={handleGraphChange} value='bar'>Bar</Button>*/}
      <section className="w-full">
        <CalcContainer /*chartType={chartType} chartName={chartName}*/ />

        {/*<article className='w-4/5 '>*/}
        {/*    /!*{activeChart()}*!/*/}
        {/*    <Total />*/}
        {/*</article>*/}
      </section>
    </section>
  );
};
