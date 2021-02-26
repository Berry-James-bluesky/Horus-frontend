_Direct parent for all `<TimerObj />` components_

---

### States:
**Shared:** `timerModel: Array<timerDataType>` = Stores the initially fetched timers.

**Shared:** `timerView: Array<timerDataType>` = Stores a manipulated array of timer objects (depending on any filters).

---

### Function:
a `useEffect()` fetches all timers from API, and sets them to the `timerModel` state.

A second `useEffect()` then sets `timerView` to `timerModel`.

`timerView` is mapped to `<TimerObj />`s and rendered, passing the following props:

```jsx
  <TimerObj
    key={data.name}
    timerName={data.name}
    timerClient={data.client}
    timerProject={data.project}
    timerStyle={styleValue}
    timerDate={data.time}
  />
```

