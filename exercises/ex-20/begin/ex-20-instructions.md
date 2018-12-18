# Exercise 20 Instructions
## Objectives
1) Implement a PayeesSearch interface that uses an uncontrolled form field

### Implement a PayeesSearch interface that uses an uncontrolled form field
Open `PayeesSearch.js`.  
It is a simple, single-line form field. Attach an event handler (onBlur?) which captures
the data in the form field before the "Search" button is clicked on.  
When the "Search" button is clicked, call the searchPayees function, passing it
the value of the searchText field.  


### Check your code
Navigate to http://localhost:3000/payees/search to check your code. Search on a payee name.
Click on the "Search" button. You should see a filtered list of payees, matching your
search term. Click on the "List" link to clear the filter. Click on "Search" to return
to the search interface. 