#### A calendar used to display user timer history

Required States:

`[loader, setLoader] = boolean` 
Changes from `true` to `false` when calendar has finished populating.

`[timers, setTimers] = Array<object>`
An empty array, will be set to the contents of `calendarItems` when data is fetched and distributed.

Function:
1. Create `calendarItems` array for storing final data
2. Fetch and loop through all timers in DB.
3. Loop through all entries in timer's **[ timers ]** array.

(Each timer entry is structured in the following way:)
 ```json
{
    "id": 1,
    "startTime": "February 16, 2021 14:08:50",
    "endTime": "February 16, 2021 16:23:12"
}
```
A 'startTime' and 'endTime' variable is created for each timer entry (as shown above).  As our database stores the times as native JavaScript `Date()` objects, however Full-Calendar requires these dates in the ISO format.


`
const startTime = new Date(timeEntry.startTime).toISOString();
`


4. Create an object for each timer entry as follows:


`
let calendarItem = {
    title: timer.name,
    start: startTime,
    end: endTime,
};
`

5. Push each object to an array **[ calendarItems ]**

6. Assign the `events` property of the `<FullCalendar />`