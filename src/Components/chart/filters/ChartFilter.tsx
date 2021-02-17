import React from 'react';
import { Filter } from '../../timer/filter/Filter';

/**
 * Component for filtering displayed chart results
 *
 * @component
 *
 * @param {string[]}
 *
 */


export const ChartFilter: React.FC = () => {

    const chartTypes = ['User', 'Client', 'Project Name']

    const filters = chartTypes.map(filter => (
        <Filter
            key={filter}
            isType={filter}
        />
    ));

    return(
        <div className="w-full h-20 bg-white flex justify-start flex-row items-center mb-12 p-6 border-l-8 border-secondary mt-12">
            <div className='flex'>
                {filters}
            </div>
        </div>
    )

}