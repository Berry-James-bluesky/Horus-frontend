import React from 'react';
import './ChartStyle.scss';

const chartTypes: Array<string> = ['Bar', 'Line', 'Pie', 'Radar', 'Polar', 'Doughnut', 'Horizontal', 'Scatter', 'Bubble']

interface Props {
    clickEvent: any
}

export const ChartStyle = (props: Props) => {

    const chartBtns = chartTypes.map((txt: any) =>
        <button className='w-24 bg-gray-100 h-12 text-center shadow-md m-2' value={txt} onClick={props.clickEvent}>{txt}
        </button>
    )

    return(
        <div className='flex justify-between flex-wrap chart-style-btns'>{chartBtns}</div>
    )

}