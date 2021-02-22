import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

interface Props {
    buttonName: string
    iconName: any
    clickEvent: any
    value: string
}

export const ChartFilterItem = (props: Props) => {

    return(
        <button className='w-full flex items-center justify-center chart-filter-btn' onClick={props.clickEvent} value={props.value}>
            <span className='filter-btn-txt font-sans'>{props.buttonName}</span>
            <Icon name={props.iconName} className='filter-btn-icon'/>
        </button>
    )
}