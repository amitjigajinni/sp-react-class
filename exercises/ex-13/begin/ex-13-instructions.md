# Exercise 13 Instructions
## Objectives
1) Create a component, PayeeList, which renders a list of Payees into a table
2) This will include a component, PayeeRow, as well

We will actually do this in reverse order, as we need the PayeeRow for the PayeeList.

### Create `PayeeRow`
`PayeeRow` renders one row in an HTML `<table>`.  
Open PayeeRow.js  
Create a pure functional component which returns a table row with the following
characteristics:
* Expects to be passed a `payee` and a handler, `onPayeeSelect`.
* It should render the Payee's name, city, and state
* The row should have the class `clickable`.
* When the row is clicked on, it should invoke the `onPayeeSelect` custom event, 
  passing it the clicked-on payee. 
  * The `onPayeeSelect` event handler will be passed in by `PayeeList`

### Create `PayeeList`
`PayeeList` renders an HTML table, using `PayeeRow` for the rows
Open PayeeList.js
Create a pure functional component which has the following characteristics:
* Expects to be passed a list of payees and an `onPayeeSelect` handler
  * The `onPayeeSelect` event handler will be passed in by `PayeesContainer`.
* Renders a table with the classes `table` and `table-hover`.
* Renders a `<thead>` section with three column headings: payee name, city, and state
* Renders a `<tbody>` section which iterates over the `payees` property and 
  prints out a `PayeeRow` for each payee. 
  * Do not forget to add a `key` property to the `PayeeRow`.
  
### Update `PayeesContainer`
We need to update `PayeesContainer` to handle our two views: `PayeeList` and `PayeeDetail`.  
We have moved the code for `PayeeDetail` and `BrowserButtons` into `PayeeBrowser`.
`PayeeBrowser` accepts three properties:
* `payee`: A Payee to display
* `onNextPrev`: A handler for the onNextPrev custom event
* `onBack`: A handler for the new onBack event, which is triggered by `BrowserButtons`'
  new Back button

Start by writing a `handlePayeeSelect` event handler. Be sure to bind it in the 
`constructor`. On `this.state`, it should set the view to the detail view, and the
payee to the payee passed to the handler. 

Then write an `backToList` event handler. Be sure to bind it in the `constructor`.
It should set the `view` property of `this.state` to the list view.

Finally, in the `render` method, create a variable, `view`. This will hold the 
component which `PayeesContainer` is currently displaying, either `PayeeList`
or `PayeeDetail`. The default should be to display `PayeeList`. Make sure 
that you pass in an `onPayeeSelect` handler and a list of payees to `PayeeList`.  

Add an if statement with a condition to check if the current this.state.view is
the detail view. If so, assign a `PayeeBrowser` instance to `view` instead. Do 
not forget to pass a Payee, an `onBack` handler, and an `onNextPrev` handler to 
`PayeeBrowser`. 

The return value of the `render` method should be `view` wrapped by a `<div>`. 
