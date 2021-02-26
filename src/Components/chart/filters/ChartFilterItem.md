A button used to change the type of data being charted.  See the `<ChartFilter />` component for the rendering of these components.

### States:
**Shared**: `setChartType` and `setChartName` 

`chartSet()` sets both the `chartType` and `chartName` states to the `value` and `innerText` attributes of each `<ChartFilterItem />`.

Each `<ChartFilterItem />` is a button, with an `onClick={chartSet}`.