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
            <section className={'timer-section md:mt-0 mt-8 pt-8 border-t-2'}>
                <div className="float-left">
                    <h2>Timers</h2>
                </div>
                <TimerContainer />
            </section>
        </div>
    )

}

export default TimerDashboard