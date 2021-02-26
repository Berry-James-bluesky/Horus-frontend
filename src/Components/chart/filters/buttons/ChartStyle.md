A button used to change between chart types.

### States:
`[isVisible, setIsVisible] = boolean` = Toggle to show/hide the buttons.


### Function:

`chartTypes: Array<object>` stores all chart button `"name"` and `"img"` values.

`chartBtns` maps each object in `chartTypes` to an HTML `<button />` element containing an `<img />` tag, with the image's source set to the `"img"` value and the button's `value` attribute being set to the `"name"`.  