import React, { useState, useEffect } from 'react';
import { TimerObj } from './TimerObj';
import './TimerContainer.scss';
import test from '../../test.json';
import { getTimers } from '../API';
import Select from 'react-select';

/**
 *
 * Contains timerObjs as direct children (currently being rendered from test data @ test.json)
 *
 * Card/list style defined by React-select dropdown box
 *
 * @constructor
 */

interface timerDataType {
    data: Array<object>
}

const TimerContainer: React.FC = () => {

    // set states
    const [styleValue, setStyleValue] = useState('card');
    const [fetchedTimers, setFetchedTimers] = useState<Array<timerDataType>>([]);

    /**
     * @function
     * Get all stored timers from DB
     */

    useEffect(() => {
        getTimers()
            .then(timers => {
                // @ts-ignore
                setFetchedTimers(timers.data)
                console.log(fetchedTimers)
            })

    }, [])

    // Define options for react-select dropdown
    const styleOptions = [
        {
            'value': 'card',
            'label': 'Card',
        },
        {
            'value': 'list',
            'label': 'List',
        }
    ];

    // change styleValue state on react-select option change
    const handleChange = (e: any) => {
        setStyleValue(e.value)
    }

        return (
            <>
                <Select options={styleOptions} onChange={handleChange} className='w-50 float-right m-8 mt-0'/>
                <div className={`timer-container ${styleValue}-container`}>
                    {fetchedTimers.map((data: any) =>
                        <TimerObj
                            key={data.name}
                            timerName={data.name}
                            timerClient={data.client}
                            timerProject={data.project}
                            timerStyle={styleValue}
                            timerDate={data.time}
                        />
                    )}

                </div>
            </>

        )

}

export default TimerContainer