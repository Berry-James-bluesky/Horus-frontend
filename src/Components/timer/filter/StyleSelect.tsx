import React, { useState } from 'react';
import Select from 'react-select';

/**
 * 'react-select' powered, choose between 'list' and 'card' view for timers
 *
 * @deprecated
 * Much easier to implement directly in { TimerContainer } component, so has been done that way for now
 *
 * @constructor
 */

export const StyleSelect = () => {

    const [styleValue, setStyleValue] = useState('card')

    const styleOptions = [
        {
            'value': 'card',
            'label': 'Card',
        },
        {
            'value': 'list',
            'label': 'List',
        }
    ]

    const handleChange = (e: any) => {
        setStyleValue(e.value)
        console.log(styleValue)
    }

    return(
        <Select options={styleOptions} onChange={handleChange} />
    )

}