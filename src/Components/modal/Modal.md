_A simple modal component._

### Props:
`active: boolean` = Toggles modal visibility

`closeModal: any` = A passed function from the parent element which changes `active`

`title: string` = The title to be displayed at the top of the modal

`content: any` = The content to be displayed in the body of the modal (this can be any valid JSX)

### Function:

- Pass in desired `content` from parent container (i.e. return some JSX in a const and set is as the property `content`)

- The `closeModal` function would likely toggle a state in the parent element, and pass the value of the state through to `<Modal />`