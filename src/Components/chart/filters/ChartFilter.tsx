import React, { useState } from 'react';
import { ChartFilterItem } from "./ChartFilterItem";
import { Icon } from 'semantic-ui-react';
import './ChartFilter.scss';
import Pyramids from '../../../imgs/sidebar-topper.jpg';

/**
 * Component for filtering displayed chart results
 *
 * @component
 *
 * @param {string[]}
 *
 */

interface Props {
    clickEvent: any
    chartType: string
}

export const ChartFilter = (props: Props) => {

    const [active, setActive] = useState('chart-filters-active');

    const [isVisible, setIsVisible] = useState(false);

    const handleFilterToggle = (e: React.MouseEvent) => {
        setIsVisible(!isVisible)
    }

    const filterStatus = isVisible ? 'chart-filters-mobile-visible' : 'chart-filters-mobile-hidden';

    const chartTypes = [
        {name: 'All Users', type: 'assignedTo', icon: 'user'}, {name: 'All Clients', type: 'client', icon: 'briefcase'}, {name: 'All Projects', type: 'project', icon: 'lightbulb'}
    ]

    const filters = chartTypes.map(filter => (
        <ChartFilterItem
            buttonName={filter.name}
            value={filter.type}
            clickEvent={props.clickEvent}
            iconName={filter.icon}
        />
    ));

    let theClass = active.toString();

    return(
        <>
            <button onClick={handleFilterToggle} className={'filter-toggle-button md:hidden block'}><Icon name={'options'}/></button>
            <div className={`w-64 h-full relative top-0 bg-white flex flex-col justify-start items-start flex-row items-center mb-12 pl-4 pr-4 border-r-2 chart-filter ${theClass} ${filterStatus}`}>
                <div className='md:pt-4 md:block hidden'>
                    <button className='arrow-btn'  onClick={() => {active === 'chart-filters-active' ? setActive('chart-filters-hidden') : setActive('chart-filters-active')}}>
                        <Icon name='arrow left' />
                    </button>
                </div>
                <div className='flex flex-col h-screen items-center w-full filter-icon-container'>
                    <div className='filter-header md:bg-none' style={{backgroundImage: `url(${Pyramids})`}}>
                        <h2 className='text-white filters-title'>Filters</h2>
                        <Icon name='options' />
                    </div>
                    <div className='grid grid-col-3 w-full'>
                        {filters}
                    </div>
                </div>
            </div>
        </>
    )

}