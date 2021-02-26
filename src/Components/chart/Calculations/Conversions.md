Contains helper scripts for converting times in seconds to minutes, hours and days.

### Passed Properties:
Time in seconds

### Functions:
Functions are called as follows:

> `Conversions.seconds(/** TIME IN SECONDS **/)`

With the following functions available:
    
> `Convert.seconds()`
`Convert.minutes()`
`Convert.hours()`
> `Convert.days()`


## Please Note:

These conversions automatically truncate the returned time and are only suitable for displaying on a clock that will show all values simultaneously.
i.e. A returned seconds/minutes count will not exceed 60, a returned hours count will not exceed 24.