_Uses the `react-datetime-picker` component to select start/finish times when adding a timer_

### States:
**Shared**: `startTime`, `endTime`


### Function:

a `useEffect()` sets the `startTime` and `endTime` states to `null` upon first mounting the component.

These shared states are then used by the `<TimerCreate />` component.