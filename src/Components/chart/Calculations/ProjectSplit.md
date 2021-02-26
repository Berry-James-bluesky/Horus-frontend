A graph-data calculation component.

### States:

`[fetchedData, setData] = useState<Array<number>>` = Contain final data for passing to Chart.js component as array of numbers.

`[fetchedLabels, setLabels] = useState<Array<string>>` = Contain final data-labels for passing to Chart.js component as array of strings

__Note__: These two arrays must align in order for data to be displayed correctly.

**Shared**: `chartType` = Shared state which determines the parameter the data is being split by.

## Function

`useEffect()` runs the primary function of splitting the passed data.

### Variables

1.  `const splitBy = el.${chartType}` = the current `chartType` value, with 'el.' appended to the start for the sake of simplicity (this will be used in a forEach loop, wtih `el` as the assigned name for each item).


1. `finalData: Array<ISplitObj>` = An array of objects of the ISplitObj type (as follows):

```json
{
  "name": /** The name of the client/user/project */,
  "total": /** The total number of hours spent by/for the "name" */
}
```

2. `fetchedSplit = new Set()` = Stores the names of each client etc. that is being split by.  
A JS Set() is used, as it does not allow for duplicates, thus removing the need to check for duplicates separately.
   

3. `finalLabels: Array<string> = []` = The final array of data labels that will be sent to Chart.js


4. `finalTimes: Array<number> = []` = the final array of data numbers that will be sent to Chart.js


### Process
1. Loop through each timer object and add the current `splitBy` to the `fetchedSplit` set.


2. Loop through the `fetchedSplit` set and create an object of the `ISplitObj` type for each entry.  set `"name"` to the entry name and set `"total"` to 0.  Push each object to the `finalData` array


3. Loop through each timer object and create the variable `let timeTotal = 0`.


4. Then within the first loop, loop through each object in the `timer` array and create a JS date object for the start and end times.

`startTime = new Date(timeObj.starTime)`

`endTime = new Date(timeObj.endTime)`


5. Create a const `dif` and assign it the difference (in seconds) between the two date objects with `differenceInSeconds(endTime, startTime)`


6. Create a const `hrs = Math.floor(dif / 3600)` to convert the time in seconds to hours.  Add this to the `timeTotal` variable.


7. Loop through `finalData` and check if the `splitBy` value is equal to the matching parameter in each object in `finalData`.  If it is, add it the objects `total` value.


8. Loop through the `finalData` array and split each objects 'name' and 'total' into the `finalLabels` and `finalTimes` arrays for passing to the `<Graph />` component.


9. set the shared states `fetchedData` and `fetchedLabels` to the respective array for render. 