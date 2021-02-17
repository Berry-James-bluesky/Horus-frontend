import React from 'react';
import { Clock } from './Clock';
import { Button } from 'semantic-ui-react';
import './Timer.scss';

/**
 * Displays current timers.
 */

interface timerDateType {
    days: number
    hours: number
    minutes: number
    seconds: number
}

interface Props {
    timerName: string
    /** The name given to the timer during creation */
    timerClient: string
    /** The client assigned to the timer during creation */
    timerProject: string
    /** The project assigned to the timer during creation */
    timerStyle: string
    /** The current style of the timer (list or card) */
    timerDate: timerDateType
}

export const TimerObj: React.FC<Props> = (props) => {

    return(
        <div className={`h-56 bg-white p-2 font-sans shadow-lg ${props.timerStyle}-item`}>
            <div className='w-full h-12 border-b-2 flex items-center justify-center font-bold'>
                <span>{props.timerName}</span>
            </div>
            <div className='w-full h-12 border-b-2 text-sm flex items-center justify-center'>
                <span>{props.timerClient}</span><span>{props.timerProject}</span>
            </div>
            <div className='w-full h-12 border-b-2 flex items-center justify-center'>
                <Clock />
            </div>
            <div className='w-full h-16 flex items-center justify-center'>
                <Button>Stop Timer</Button>
            </div>
        </div>
    )

}