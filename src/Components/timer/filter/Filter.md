_A dropdown-style filter powered by `react-select`_

---

### Props:

`isType: string` = Type of filter to be displayed

`filter?` = 

### States:
**Shared:** `timerModel` = 

**Shared:** `timerView` = 

`filterType` = 

`filterOptions` = 

**Shared:**: `filterParams` =

---


### Function:

A `useEffect()` function sets the `filterType` state to the passed `props.isType` value.  After which, it runs the following `getData()` function.

**getData():**

1. `getData()` runs the `getTimers()` function from `API.ts`


2. Loop through the fetched data and create a `filterObj` for each, structured as follows:

```json
{
  "value": "",
  "label": ""
}
```

Set the `value` and `label` values to the corresponding `filterType` in the array of timers (i.e. a filter with a `filterType` of
'User' would set the `value` and `label` values to the name of the timer objects `user` value).

3. Push each created `filterObj` to the `filterOptionsArray` array.  Set the `filterOptions` state to the `filterOptionsArray` array.

---

The state `filterOptions` is passed through to the `<Select />` component as an `options` prop.

An `onChange` event sets the `filterParams` state to the selected value.