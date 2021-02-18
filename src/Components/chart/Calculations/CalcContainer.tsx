import React, { useState, useEffect } from 'react';
import { Total } from './Total';
import { ProjectSplit } from './ProjectSplit';
import { getTimers } from '../../API';


const CalcContainer: React.FC = () => {

    const [timerData, setTimerData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTimers()
            .then((timers: any) => {
                setTimerData(timers)
                setLoading(false)
            })
    }, [])

    if(loading) {
        return(
            <span>...loading</span>
        )
    }

    return(
        <>
        <Total />
        <ProjectSplit data={timerData} splitBy={'el.project'} splitName='A name would ideally go here'/>

        </>
    )

}

export default CalcContainer
