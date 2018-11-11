# Exercise 14 Instructions
## Objectives
1) Clicking on a column header should sort our list of Payees
2) Clicking on the same column header again should reverse the sort (from 
   ascending to descending and vice versa)
3) When browsing through PayeeDetail, the browse order should be affected 
   by the current sort

### Clicking on a column header should sort our list of Payees
Open PayeeList.js
Add an event handler to each of the `<th>` elements. It should invoke the custom
event `onListSort` and pass it the name of the field to sort on.

Open PayeesContainer.js
Create an event handler, `handleSort`. It will be passed a sort field. It should
sort `this.state.payeeList` by the sort field. Import `sortBy` from lodash to 
do the work of sorting.  
Bind the event handler in the constructor.
On `PayeeList`, assign `handleSort` as the event handler for `onListSort`.

You should be able to load the application and have it sort fields at this point.
We have not yet implemented the code to reverse the sort if the user clicks on the
column header a second time.

### Clicking on the same column header again should reverse the sort 
Add code to `handleSort` to figure out whether this is the second click on the 
same header, or a click on a different header. If this is the second click on the
same header, reverse the current sort, rather than re-sorting.

### `PayeeDetail` should reflect the current sort
Take note of the sort order, and click on one of the Payees. When `PayeeDetail` loads, 
click on the Next and Previous buttons to see if you are browsing through the sorted
list or a differently ordered list.


