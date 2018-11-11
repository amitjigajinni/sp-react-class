# Exercise 9 Instructions
## Objectives
1) Load a list of Payees 
2) Use state to track the currently displayed Payee
3) Use event handlers to browse through the set of Payees

### Load a list of Payees
We need to load a list of Payees from `payeesDAO`. So we have converted `PayeeDetail`
to a class-based component for this exercise. (Do not worry, we will switch it 
back soon enough.)  

In the `constructor`, use `payeesDAO` to retrieve a list of Payees.  

### Use state to track the currently displayed Payee
Create a state object which tracks the currently displayed Payee.  
You can do this with `props.payee`, or possibly with the index of the current
Payee. Your choice.

### Use event handlers to browse through the set of Payees
You may have noticed that `this.handleNext` and `this.handlePrevious` are 
are already bound to the appropriate buttons. But they are **NOT** bound 
to the component instance. If you try to use `this.state` in either event
handler, you will run into problems.

Bind the two event handlers properly in the `constructor`. 

Add code to each event handler which will call `this.setState()` to update 
the currently displayed Payee. Make sure that you handle boundary cases and 
do not browse "past" the end of the array or "before" the beginning. 

### Challenge

Combine the two event handlers into one, since there is so much shared code
between the two.

### Testing
Open your browser to [http://localhost:3000/](http://localhost:3000/). You can 
interact with the component directly. The appearance will not have changed from
the previous exercise, but the buttons will now allow you to browse through
the set of Payees.