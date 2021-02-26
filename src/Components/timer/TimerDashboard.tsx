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
        <div className="timer-dashboard pl-6">
            <div className={'flex items-center transition-all'}>
                <FilterContainer />
                <TimerControl/>
            </div>
            <section className={'timer-section md:mt-0 mt-8 pt-8'}>
                <div className="float-left">
                    <h2 className={'title'}>Timers</h2>
                </div>
                <TimerContainer />
            </section>
        </div>
    )

}

export default TimerDashboard