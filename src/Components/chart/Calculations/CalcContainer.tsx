import React, { useState, useEffect } from 'react';
import { Total } from './Total';
import { ProjectSplit } from './ProjectSplit';
import { getTimers } from '../../API';
import { ChartStyle } from '../filters/buttons/ChartStyle';

interface Props {
    chartType: string
    chartName: string
}

const CalcContainer = (props: Props) => {

    const [timerData, setTimerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [graphStyle, setGraphStyle] = useState('pie');

    useEffect(() => {
        getTimers()
            .then((timers: any) => {
                setTimerData(timers)
                setLoading(false)
            })
    }, []);

    const getType = (e: any) => {
        setGraphStyle(e.target.value);
        console.log(graphStyle);
    };

    if(loading) {
        return(
            <span>...loading</span>
        )
    };

    console.log(`el.${props.chartType}`)

    return(
        <div className='w-full relative right-0 p-12'>
            <h1 className='mt-0'>Statistics</h1>
            <ChartStyle clickEvent={getType} />
            <ProjectSplit data={timerData} splitBy={`el.${props.chartType}`} splitName={props.chartName} graphType={graphStyle}/>
            <Total />
        </div>
    )

}

export default CalcContainer
