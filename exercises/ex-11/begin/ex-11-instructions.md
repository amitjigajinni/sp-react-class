# Exercise 11 Instructions
## Objectives
1) Test our PayeesComponent, PayeeDetail, and BrowserButtons components
2) Use the state() and props() methods to test that the components have the proper state and props
3) Use spies to ensure that event handling functions were called correctly

### Testing PayeeDetail
#### Add a new snapshot test to the first `describe`. 
This test should get a Payee for a Payee that activates one of the different
panel styling classes. Check the details in PayeeDetail.js to see which
Payees will trigger the class change. Build the snapshot around this different
Payee.

#### Check that `PayeeDetail` is receiving props correctly
Get the props from `PayeeDetail`. Check against a control Payee to see 
that they are one and the same reference.

#### Check that `PayeeDetail` renders class styles correctly
The solution for this is currently in the code. Look at the examples in
the third `describe` to see style checks at work. 

### Testing BrowserButtons
BrowserButtons does not have much in the way of styling, so we will be checking
to ensure that the proper functions are invoked at the proper time. 

Create a spy to spy on the `onNextPrev` custom event.  
Simulate a click on the 'Previous' button.  
Check the spy to see if it has been invoked.

Do the same set of steps for the 'Next' button. 

### Testing PayeesContainer
For all of the tests below, you should have a mounted wrapper for `PayessContainer`
available, as well as a reference to a list of payees from `payeesDAO`.

Start by removing the dummy test in the spec file.

#### Test event handling
Spy on `PayeesContainer`'s `handleNextPrev` method.  
Update the wrapper.  
Simulate a click on the Next or Previous button.  
Verify that the spy has been called. 

#### Test that the initial Payee rendered properly
You could do this with a snapshot test, but we will confirm it with a set of checks
on the `wrapper`.  
After mounting the component, check the following:
* Does the state have a payee property equal to the first payee in the list?
* Does PayeeDetail, under the `wrapper` have a prop equal to the first payee in the list?
* Is the content of the `.panel-heading` the same as the payeeName property
  of the first Payee in the list?

Do not forget to add negative checks (e.g., the state is **NOT** a different Payee)

Then, in a second `test`, after mounting the component, simulate a click on the
 'Next' button. Then check the following:
* Does the state have a payee property equal to the second payee in the list?
* Does PayeeDetail, under the `wrapper` have a prop equal to the second payee in the list?
* Is the content of the `.panel-heading` the same as the payeeName property
  of the second Payee in the list?

Do not forget to add negative checks (e.g., the state is **NOT** the first Payee)
 