# Exercise 10 Instructions
## Objectives
1) Extract some code into the `PayeesContainer`, `PayeeDetail`, and `BrowserButtons` components
2) Add custom events to `BrowserButtons`
3) Refactor code to handle `BrowserButtons`' custom events

### Extract code into multiple components
Currently, all the code is in `PayeeDetail`, which is untenable.  
We have moved some code around for you. Here is a rundown of what to expect:
* `PayeesContainer` will be the root element for the application. It will contain:
* `PayeeDetail` which reverts to being a pure functional presentational component
* `BrowserButtons`, a generic, reusable, functional component which will send 
  custom events when its buttons are pressed.
  
Start in `PayeeDetail`. Grab the `div.btn-group` element and move it into 
`BrowserButtons`. You can also drop the now-useless containing `div` in `PayeeDetail`.

### Add custom events to `BrowserButtons`

Move over to `BrowserButtons`. Attach `onClick` event handlers to the buttons, which invoke
the `onNextPrev` property passed into `BrowserButtons`. The invocation should pass
back the direction of the button ('next' or 'previous'). You may have to use a slightly
different event binding syntax here. 

### Refactor code the handle `BrowserButtons`' custom events
Change to `PayeesContainer`. Start by adding `PayeeDetail` and `BrowserButtons`
to the `render` function. Bind the `payee` from `state` to `PayeeDetail`. 

For `BrowserButtons`, bind the appropriate event handler in `PayeesContainer` 
to the `onNextPrev` custom event emitted by `BrowserButtons`.

### Testing
Open your browser to [http://localhost:3000/](http://localhost:3000/). You can 
interact with the component directly. The behavior will not have changed from
the previous exercise, but the appearance will have changed from the starting
point of the exercise. 

### Challenge/Bonus
Add code to `PayeeDetail` which changes the enhancement class of the panel 
(currently `panel-primary`) for Payees of different categoryNames.  