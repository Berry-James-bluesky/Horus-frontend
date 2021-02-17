import React from 'react';
import Timer from 'react-compound-timer';

/**
 * A proof-of-concept timer used for testing purposes.
 * Please use { Clock } instead
 * @deprecated
 *
 * @constructor
 */

export const ActiveTimer: React.FC = () => {

    return(
        <Timer>
            <Timer.Hours />h <Timer.Minutes />min <Timer.Seconds />sec
        </Timer>
    )

}