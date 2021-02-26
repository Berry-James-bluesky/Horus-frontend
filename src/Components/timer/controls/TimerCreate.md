_Component used for creating a new timer entry in the database_

### Props:
`current: boolean` = Is set to `true` if the timer is to start immediately with no end time,
is set to `false` if the timer requires a start and end date.

### States:

`timerData: ITimer` = An object containing all timer data ready for posting to the database.

`name` = The description of the timer typed into the appropriate input

`user` = The user the timer is being assigned to

`client` = The client the timer is being assigned to

`isBillable: boolean` = Whether the time spent in the timer is billable 

`showNotify: boolean` = set to `true` to make notification visible

`notifyMsg` = The message to be displayed in the `<Notify /> component

`iconState` = The icon to be displayed in the `<Notify />` component

**Shared:** `startTime`, `endTime` = The start and end `Date()` objects of the timer


### Function:

Each input box works off the same method, a handler function detects when the `value` of the input is changed, and sets the appropriate
state to the `value`.

**Types of timers**

Depending on the passed `props.current`, The rendered UI and timer requirements will change.

__If timer is current (active)__:

1. Create variable `currentTime = new Date()`

2. `setTimerData` state to an object with all data states (i.e. `name`, `user` etc.) and set `startTime: currentTIme`


__If timer is past (inactive)__

1. Check if timer start date is _before_ timer finish date, if not `<Notify />` an error.

2. `setTimerData` state to an object with all data states (including `startTime` and `endTime` states).

3. `<Notify />` That the timer was added.

**Error Handling**

A conditional checks if all required values (name, user, client) are present.
If any are missing, an error `<Notify />` is returned.


**Posting the data**

a `useEffect()` depending on the `timerData` state will call the `postTimer` function 
from `API.ts` and `console.log` the posted data.