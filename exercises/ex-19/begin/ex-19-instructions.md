# Exercise 19 Instructions
## Objectives
1) Provide a path to `PayeeEditForm`  
2) Hook up the form fields in PayeeForm to state updates
3) Implement the Save and Reset buttons

### Provide a path to PayeeEditForm
Open the app in your browser. In the `PayeeList` view, you should notice that 
there is now an 'Edit' button on the right side of each row. Similarly, there is
an 'Edit' button in each detail view. Clicking on either of these buttons will
take you to the edit view, loading `PayeeForm` inside `PayeeEditForm`.

### Hook up the form fields in PayeeForm to state updates
Connect each form field in PayeeForm to the state object so that every change
in the form field updates the state and vice versa.  
Consider writing two functions: an adapter function, `handleChange` which knows
how to get the field name and the value from different form fields (checkboxes, 
for instance) and `updateState` which is just passed a field name and a value and 
updates state accordingly. 

### Implement the Save and Reset buttons
The Reset button should restore the form to its original state.  
The Save button should call the savePayee event, passing the updated payee.

### Check your code
Navigate to http://localhost:3000/ to check your code. You should see a list of payees.
Choose to edit a payee. Make changes. Click the reset button to check that the payee is
restored. Make changes again. Click the save button. Verify that the changes have been made. 