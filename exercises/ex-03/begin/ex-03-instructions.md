# Exercise 3 Instructions

## Objectives
* Create a CustomHeader component
* Create a CustomFooter component
* Pass properties to both components which are rendered within the component's output

## Directions
### Create a CustomHeader component
Open the file CustomHeader.js

Create a React component therein.
It should expect a property, `today`, which contains the day of the week.
Use that to output a message.

Consult the screenshot below to see what the output should look like

### Create a CustomFooter component
Open the file CustomFooter.js

Create a React component therein.
It should expect a property `company`, which has the following structure:
```javascript
  let company = {
    name   : 'Express Scripts',
    address: '100 Forest Lane',
    city   : 'Franklin Lakes',
    state  : 'NJ',
    zip    : '07027'
  }
```

### Pass properties to both components....
Open App.js

1) Add a variable `company`, defined similar to the example above
2) Add `<CustomHeader>` to App's return statement. Pass it the current day of the week.
3) Add `<CustomFooter>` to App's return statement. Pass it the `company` defined in item 1 above.

### Testing

Load [http://localhost:3000/](http://localhost:3000/) in your browser. It should look like this: 
![Exercise 3 Solution](images/ex-03-complete.png)
