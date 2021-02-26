Generates a graph of passed type with passed data.

### States:

**Shared:** `graphStyle`, `fetchedData`, `fetchedLabels`, `chartName`


### Function:
Most graph properties are hard-coded in this file (i.e. styling), aside from the parameters assigned by the above mentioned states.

The graph type is determined by the `graphStyle` state.  A conditional statement returns a particular chart style depending on the value passed.

Each chart type takes a `data` and `options` parameter, which are set to the `data` and `options` variables assigned above, with passed-in shared states to determine the actual data.
