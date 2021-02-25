import React from 'react';
import { Clock } from './Clock';
import { Button, Icon } from 'semantic-ui-react';
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
        <article className={'timer-full'}>
            <div className={`bg-white font-sans shadow-lg ${props.timerStyle}-item`}>
                <div className='w-full h-16 flex items-center justify-center font-bold bg-gray-100'>
                    <span>{props.timerName}</span>
                </div>
                <div className='w-full h-12 text-sm flex items-center justify-center flex-col'>
                    <span>{props.timerClient}</span>
                    <span>{props.timerProject}</span>
                </div>
                <div className='clock-wrapper h-12 flex items-center justify-center'>
                    <Clock />
                </div>
                <div className='w-full h-16 flex items-center justify-center'>
                    <button className={'flex justify-center bg-gray-200 w-12 h-12 items-center hover:bg-blue-200'}><Icon name={'pause'} /></button>
                </div>
            </div>
        </article>
    )

}