_Once a control bar, now a modal acting as the parent element for all components related to adding a timer_

### States:
`showModal: boolean` = The boolean passed to the Modal component that opens/closes it

`timerType: boolean` = Decides the type of timer-add to display (past time, or add a new timer starting now).  This is passed through to the `<TimerCreate />` component as the prop `current`.

### Function:

The `content` const returns a `<TimerCreate />` component, along with buttons for toggling the `timerType` state (functionally, these appear as tabs).

Uses the `<Modal />` component to render `content`.