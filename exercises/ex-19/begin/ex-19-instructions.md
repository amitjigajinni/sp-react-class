# Exercise 19 Instructions
## Objectives
1) Create a store to manage PayeeDetail's state  
2) Create action(s) and reducer(s) to interact with the store  
3) Connect the store to PayeeDetail using connect  


### Create a store to manage PayeeDetail's state
Open `App.js`.  
Import `createStore` from redux
Do __not__ create a store yet. Because you will need a reducer to do that. Go to the next objective. 

### Create action(s) and reducer(s) to interact with the store
Open `payees/payee-actions.js`. 

What's the next logical bit of state we have to worry about? Next or previous Payee!

Create a constant, `getNextPrev` which takes the appropriate arguments and returns an action
with a type of GET_NEXT_PREV_PAYEE and appropriate properties

Open `payees/payee-reducers.js`
Add a reducer for payees (yes, payees, plural). This should simply get the set of payees from `payeesDAO.list()`
Add an action case to the payee reducer for GET_NEXT_PREV_PAYEE. The code for this case will calculate
the appropriate payee to return. If the payee position would be greater or less than the number of payees, 
block the list at the last or first payee, as appropriate

You will have to use the `payees` reducer to get the set of payees in the first place. Call it with 
no state (`undefined`) and the same action item

Return to the reducer for `payees` and write a case for GET_NEXT_PREV_PAYEE

Now that you have a reducer, you can go back to `App.js` and import the reducer and add it to the store.

### Connect the store to PayeeDetail using `connect`
Open `payees/PayeeContainerRedux.js`

Change `mapDispatchToProps` to a dispatcher function which dispatches the current payee
and the direction to `getNextPrev` from your actions.

### Test out your code!
