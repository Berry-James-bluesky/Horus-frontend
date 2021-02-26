Container for filter buttons used to specify what type of chart/graph is displayed.

`const chartTypes = []` contains each chart type as an object with a "name". "type" and "icon" value.

Each entry in the `chartTypes` array is mapped through and renders a `<ChartFilterItem />`, which takes the following props:

`buttonName = {el.name}`

`value = {el.type}`

`iconName = {el.icon}`