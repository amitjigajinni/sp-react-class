# Exercise 12 Instructions
## Objectives
1) Add PropTypes to PayeeDetail
2) Add PropTypes to BrowserButtons

### Add PropTypes to PayeeDetail
Add `PropTypes` to `PayeeDetail`. Cover the important parts of `PayeeDetail`: the `id`,
`payeeName`, `address`, `city`, `state`, and `zip`, as well as the `categoryId`.

### Add PropTypes to BrowserButtons
Add `PropTypes` to `BrowserButtons`. Think about what that component requires and 
add it to the `PropTypes` configuration.

### Testing
Bring up the application in your browser. Open the developer console. 
If you implemented `PropTypes` correctly, you will see no errors.  
Go back to the source code for `PayeesContainer`. Before assigning the next
Payee in `handleNextPrev`, delete the `categoryId` from the Payee. You should see
a warning appear in the console the next time the Next or Previous buttons are clicked.


