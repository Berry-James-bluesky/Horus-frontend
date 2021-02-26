import React from 'react';
import TimerDashboard from "../Components/timer/TimerDashboard";

export const Dashboard: React.FC = () => {

    return(
        <div className='dashboard'>
            <h1 className={'page-title pl-6'}>Dashboard</h1>
            <TimerDashboard />
        </div>
    )

}