import React from 'react';
import { Clock } from './Clock';
import { Button, Icon } from 'semantic-ui-react';
import './Timer.scss';
import Noise from '../../imgs/noise.png';

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
        <div className={`timer-body font-sans ${props.timerStyle}-item`}>
            <button className={'absolute top-0 right-0 rounded-full w-6 h-6 bg-white text-primary flex items-center justify-center timer-close-btn'}>&times;</button>
            <div className='w-full h-16 flex items-center justify-center font-bold timer-section'>
                <span className={'text-2xl uppercase'}>{props.timerName}</span>
            </div>
            <div className='w-full h-16 text-sm flex items-center justify-evenly timer-section'>
                <span className={'timer-tag bg-blue-400 pt-2 pb-2 pl-4 pr-4 rounded-2xl shadow-md'}>{props.timerClient}</span>
                <span className={'timer-tag bg-blue-400 pt-2 pb-2 pl-4 pr-4 rounded-2xl shadow-md'}>{props.timerProject}</span>
            </div>
            <div className='clock-wrapper h-12 flex items-center justify-center'>
                <Clock />
            </div>
            <div className='w-full h-16 flex items-center justify-center'>
                <button className={'styled-button'}><Icon name={'pause'} /></button>
            </div>
        </div>
    )

}