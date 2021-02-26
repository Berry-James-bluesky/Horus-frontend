_A simple clock component, updated every second_

--- 

### States:
`difference: string` = A clock-like string that is updated every second, mimicking a clock.

---

### Function:

The following function is wrapped in `setInterval()`, forcing it to re-run every second.

A const `current` is set to `Date()`.

The conversion functions set in `Convert.ts` are used to return a string for days, hours, minutes and seconds.

`timeString` is declared and set to a string of each time specification in sequence.