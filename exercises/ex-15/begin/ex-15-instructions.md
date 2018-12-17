# Exercise 15 Instructions
## Objectives
1) Replace the static DAO file with the new, fetch-based DAO
2) Replace the use of the old, imperative calls to the DAO to promise-oriented calls

### Replace the static DAO file
Open PayeesContainer.js  
Replace the line importing payeesDAO from `../data/class-data.js` to an import from
`./payees-dao.js`.

### Replace the old API calls
In the constructor for `PayeesContainer`, replace `payeesList`'s initial value 
with an empty array.  
Below the initialization of `this.state`, invoke the appropriate function on `payeesDAO`
to fetch a ***list*** of payees. Do not forget that the function will return a promise,
not an actual array.  
In the `then()` function for this promise, update the appropriate state property 
with the new array of payees the DAO just downloaded. 

### Check your code
Navigate to http://localhost:3000/ to check your code. You should still see a list 
of Payees. You should still be able to click on a Payee in the list view and go 
to the detail view. Use either the Console or the Network tab in the developer tools
to verify that you are making a request to http://localhost:8001/payees.   
