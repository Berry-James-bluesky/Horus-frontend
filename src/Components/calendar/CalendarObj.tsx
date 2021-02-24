import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { getTimers } from "../API";

export const CalendarObj: React.FC = () => {

    const [loader, setLoader] = useState(true);
    const calendarItems: Array<any> = [];

    useEffect(() => {
        getTimers()
            .then((timers: any) => {
                timers.data.forEach((timer: any) => {

                    timer.timers.forEach((timeEntry: any) => {
                        const startTime = new Date(timeEntry.startTime).toISOString();
                        const endTime = new Date(timeEntry.endTime).toISOString();
                        let calendarItem = {
                            title: timer.name,
                            start: startTime,
                            end: endTime
                        };
                        calendarItems.push(calendarItem);
                    });

                });
                setLoader(false);
                console.log(calendarItems)
            });

    }, [])

    if(loader) {
        return(<span>Loading...</span>)
    }

    return (
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={calendarItems}
        />
    )
}