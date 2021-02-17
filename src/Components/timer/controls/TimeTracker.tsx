import React from 'react';
import TimePicker from 'react-time-picker';

/**
 * Used to select a time duration to add to a project timer
 * uses the 'react-time-picker' component
 *
 * @constructor
 */

export const TimeTracker = () => {

    const [time] = React.useState('00:00');

    return(
        <div>
            <TimePicker
            value={time}

            />
        </div>
    )
}
