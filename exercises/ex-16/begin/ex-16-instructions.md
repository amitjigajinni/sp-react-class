# Exercise 16 Instructions
## Objectives
1) Note configuration of the Router in our application  
2) Add Route configuration for "top-level" routing between Payees, Categories, 
   and other areas of the application  
3) Update Navbar.js  

### Note configuration of the Router in our application
Open App.js  
Note that there is no routing code in `App.js`.
Import `BrowserRouter` as Router, and `Route` from `react-router-dom`.  
Wrap the `<section>` element in the `<Router>` component.  

### Add Route configuration for "top-level" routing
After the `<NavBar>`, add three routes for categories, payees and transactions. The 
components should be `CategoriesContainer`, `PayeesContainer`, and `TransactionsContainer`,
respectively. (`CategoriesContainer` and `TransactionsContainer` have already been 
provided for you.)  

### Update Navbar.js
In `Navbar.js`, use the Link component to add links in the Navbar to the Categories
and Transactions area.  
Also update the link for Payees to point to the Payees route.  

### Check your code
Navigate to http://localhost:3000/ to check your code. You will not see a list of Payees. 
Click on the "Payees" link in the NavBar and the list of payees should appear.
Click on the "Categories" and "Transactions" links to test them as well.    
