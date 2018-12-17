# Exercise 17 Instructions
## Objectives
1) The default page to load for our application should be Payees  
2) The default sub-page under Payees should be the list    

### The default page to load for our application should be Payees
Open App.js  
Add a `<Route>` component which redirects to `/payees` if the url is **exactly** `/`.

### The default sub-page under Payees should be the list
Open `PayeesContainer.js`  
Note that the code for managing the view has been removed and replaced with 
a placeholder.  
Add code for a `/payees/list` URL which loads `PayeesList`.  
Add a redirect for when the URL is just `/payees` (the presence of a trailing slash
is immaterial) to redirect to `/payees/list`.  
Note that after you add the list back, the `PayeeBrowser` will not work. We will fix
that in the next exercise.

### Check your code
Navigate to http://localhost:3000/ to check your code. You should see a list of payees.
Remember that clicking on a payee will ***NOT*** bring you to the detail view for the 
payee.  
