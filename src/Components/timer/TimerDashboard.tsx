import React from 'react';
import TimerContainer from './TimerContainer';
import TimerControl from './controls/TimerControl';
import { FilterContainer } from './filter/FilterContainer';

/**
 * Parent component for { TimerControl }, { TimerContainer }, and { FilterContainer } components
 *
 * @constructor
 */

const TimerDashboard = () => {

    return(
        <div className="timer-dashboard">
            <TimerControl/>
            <FilterContainer />
            <div className="float-left">
                <h2>My Timers</h2>
            </div>
            <TimerContainer />
        </div>
    )

}

export default TimerDashboard