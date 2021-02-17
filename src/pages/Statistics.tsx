import React, { useState, useEffect } from 'react';
import PieGraph from '../Components/chart/PieGraph';
import BarGraph from '../Components/chart/BarGraph';
import { ChartFilter } from '../Components/chart/filters/ChartFilter';
import './Statistics.scss';
import { Button } from 'semantic-ui-react';

export const Statistics: React.FC = () => {

    const [chartType, setChartType] = useState('pie');
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData(testData)
        setChartOptions(testOptions)
    }, []);

    let testOptions = {
        title:{
            display:true,
            text:'A graph',
            fontSize:20
        },
        legend:{
            display:true,
            position:'right'
        }
    };

    let testData = {
        labels: [],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#E26D5C',
                    '#59899c',
                    '#463F3A',
                    '#472D30',
                    '#FFFFFF'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data: [65, 59, 80, 81, 56]
            }
        ]
    };

    const handleGraphChange = (e: any) => {
        setChartType(e.target.value);
        console.log(chartType)
    };

    const activeChart = () => {
        if(chartType === 'pie') {
            return(
                <PieGraph graphData={chartData} graphOptions={chartOptions} />
            )
        }
        if(chartType === 'bar') {
            return(
                <BarGraph graphData={chartData} graphOptions={chartOptions}/>
            )
        }
    };


    return(
        <section className='stats-page-container'>
            <h1>Statistics</h1>
            <div className="stats-control">
                <ChartFilter />
                <Button onClick={handleGraphChange} value='pie'>Pie</Button>
                <Button onClick={handleGraphChange} value='bar'>Bar</Button>
            </div>

            <section className='w-full'>

                <article className='w-4/5 '>
                    {activeChart()}
                </article>


            </section>

        </section>
    )
}