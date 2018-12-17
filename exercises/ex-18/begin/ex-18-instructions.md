# Exercise 18 Instructions
## Objectives
1) Clicking on a payee in PayeesList should load the PayeeBrowser view  
2) The Prev, Back, and Next buttons should work in the PayeeBrowser view    

### Clicking on a payee in PayeesList should load the PayeeBrowser view
Create a file called `PayeeBrowserRouted.js`.  
It should be a class-based component.  
Have its `render` method return a placeholder for the moment.  

#### In PayeesContainer.js
Add a `Route` to the `render` method
The route should take a URL parameter called `id`.  
It should load `PayeeBrowserRouted`. Don't forget to pass `handleNextPrev` and 
`backToList`, as well as any other properties that might be necessary.    
In the `handlePayeeSelect` method, use programmatic routing to send the 
browser to the URL for PayeeBrowserRouted.  
Load your code in the browser. Clicking on a payee in `PayeesList` should now
bring up the placeholder from `PayeeBrowserRouted`.

#### In PayeeBrowserRouted.js
Import payeesDAO from `payeesDAO.js`.  
Write a constructor which copies payeesDAO onto the component instance and adds
a property to state called `payee` which is initially `null`.  
Write a method, `fetchData()` which calls `payeesDAO.get()` and passes the payee ID 
from the props for this component.  
Call `fetchData` from the constructor.  
In the `render` method, check to see if state.payee is null. If it is, render a 
paragraph saying that the payee is loading. If it isn't, render `PayeeBrowser`, 
passing it `this.state.payee` as the payee, as well as any other props 
(hint: `{...this.props}` ).  
Load your code in the browser. Clicking on a payee in `PayeesList` should now bring up
the matching payee in `PayeeBrowserRouted`. 
The Next, Prev, and Back buttons will **NOT** work. 
  

### The Prev, Back, and Next buttons should work in the PayeeBrowser view
#### In PayeeBrowserRouted  
Add a lifecycle method: `componentDidUpdate`. The first argument to `componentDidUpdate` is
the previous set of props. Check the previous set of props against the current set of props
to see if the `id` param on the `match` prop has changed. If it has changed, call
`fetchData()` to update the component.

#### In PayeesContainer
Add code to the `backToList` function to use the `history` prop to send the browser back
to the URL `/payees/list`.   
Add code to `handleNextPrev` that finds the selected payee (keeping in mind that a direct
call to `indexOf` will not work because the references between `payeeList` and `payee`
are different due to being fetched at different times). Then, as the last line, use the 
`history` prop to send the browser to the appropriate URL. 

### Check your code
Navigate to http://localhost:3000/ to check your code. You should see a list of payees.
Click on a payee to load the `PayeeBrowserRouted` view. Test the Next, Prev, and Back buttons.
All should be functional. 