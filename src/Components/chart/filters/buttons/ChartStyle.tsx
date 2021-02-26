import React, { useState } from 'react';
import './ChartStyle.scss';
import Bar from '../../../../imgs/icons/bar.png';
import Line from '../../../../imgs/icons/line.png';
import Pie from '../../../../imgs/icons/pie.png';
import Radar from '../../../../imgs/icons/radar.png';
import Doughnut from '../../../../imgs/icons/doughnut.png';
import Polar from '../../../../imgs/icons/polar.png';
import Horizontal from '../../../../imgs/icons/horizontal.png';

const chartTypes: Array<object> =
   [
    {
        name: 'Bar',
        img: Bar
    },
    {
        name: 'Line',
        img: Line
    },
    {
        name: 'Pie',
        img: Pie
    },
    {
        name: 'Radar',
        img: Radar
    },
    {
        name: 'Doughnut',
        img: Doughnut
    },
    {
        name: 'Polar',
        img: Polar
    },
    {
        name: 'Horizontal',
        img: Horizontal
    },
   ];

interface Props {
    clickEvent: any
}

export const ChartStyle = (props: Props) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => {
        setIsVisible(!isVisible);
    };

    const status = isVisible ? 'chart-style-btns-visible' : 'chart-style-btns-hidden';

    const chartBtns = chartTypes.map((item: any) =>
        <button className='chart-style-btn p-2 h-16 w-24 text-center shadow-md m-2 flex flex-col justify-center items-center' value={item.name} onClick={props.clickEvent}>
            <img src={item.img} alt={item.name} className={'w-16'}/>
        </button>
    );

    return(
        <>
            <button className={'styled-button'} onClick={handleVisible}>Show Chart Types</button>
            <div className={`flex justify-between flex-wrap chart-style-btns ${status}`}>{chartBtns}</div>
        </>
    )

}