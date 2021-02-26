Parent element for all calculation elements.

### States:

**Shared**:
`[timerData, setTimerData] = object` = The timer data fetched from the API is set to this state before being shared (via use-between) with child components.

**Shared**:
`[graphStyle, setGraphStyle] = string` = The desired style for the graph (line, bar, pie etc.)

`[loading, setLoading]` = Standard loading management

### Children components:**

`<ChartStyle />`

`<ProjectSplit />`

`<Total />`

All data fetching for child components is done here and passed via a shared state (use-between).

###Functions:

A `useEffect()` function fetches the timer data via the API script and sets `timerData` to the fetched data.


`getType()` sets the `graphStyle` state to the `value` of the `<ChartStyle />` button being pressed.  The value being the type of graph to display.
