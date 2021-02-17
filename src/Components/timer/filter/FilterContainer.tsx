import React, {useState} from 'react';
import { Filter } from './Filter';
import {useBetween} from 'use-between'
import { Checkbox, Button } from "semantic-ui-react";
import {useSharedTimerState} from '../TimerContainer'

/**
 * Stores rendered { Filter } components
 * @constructor
 */

const useFilterState = () => {
    const [filterParams, setFilter]: any = useState([])
    const setFilterParams = (value: any) => {setFilter(value);} 
    return ({filterParams, setFilterParams});
}


  export const useSharedFilterState = () => useBetween(useFilterState);

export const FilterContainer = () => {

    const {filterParams, setFilterParams} = useSharedFilterState();
    const {timerView, setTimerView, timerModel} = useSharedTimerState()

    return(
        <div className='w-full h-20 bg-white flex justify-start flex-row items-center mb-12 p-6 border-l-8 border-secondary mt-12'>
            <Checkbox label='Active' />
            <Filter isType='Project Name' />
            <Filter isType='User' />
            <Filter isType='Client' />
            <Button onClick={() => {setTimerView(timerModel); setFilterParams([])}}>Reset Filters</Button>
        </div>
    )

}