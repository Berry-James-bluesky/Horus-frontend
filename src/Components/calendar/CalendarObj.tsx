import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getTimers } from "../API";
import CircularProgress from "@material-ui/core/CircularProgress";

interface timerData {
  data: any;
}

export const CalendarObj: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [timerItems, setTimerItems]: Array<any> = useState([]);
  const calendarItems: Array<any> = [];

  useEffect(() => {
    getTimers().then((timers: any) => {
      timers.data.forEach((timer: any) => {
        timer.timers.forEach((timeEntry: any) => {
          const startTime = new Date(timeEntry.startTime).toISOString();
          const endTime = new Date(timeEntry.endTime).toISOString();
          let calendarItem = {
            title: timer.name,
            start: startTime,
            end: endTime,
          };
          calendarItems.push(calendarItem);
        });
      });
      setLoader(false);
      setTimerItems(calendarItems);
    });
  }, []);

  if (loader) {
    return (
      <div className="h-full">
        <CircularProgress className="m-auto absolute left-0 right-0 top-0 bottom-0" />
      </div>
    );
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={timerItems}
    />
  );
};
