# Exercise 18 Instructions
## Objectives
1) Write tests for the reducer
2) Write tests for the action

### Write tests for the reducer
Open `payees/tests/PayeeDetailRedux.spec.js`.  
Delete the placeholder test that is there.

Add a set of tests, under one `describe`. Test two things:
1) Does the reducer return a default Payee?
2) Does the reducer flip the value of a Payee's active property?

Run tests with `npm test` to see if they pass.

### Write tests for the action
Add a set of tests, under one `describe`. 

Test that when the action creator `toggleActive` is called, it returns the 
appropriate value.

If you left `npm test` running, you should be able to see the results of this test.

