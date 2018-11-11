# Exercise 4 Instructions

## Objectives
* Use inline JavaScript in our JSX to conditionally display information
* Use the `props.children` feature to render out child elements of the parent component without knowing them in advance
* Style elements according to information in `props`

## Directions
### Use inline JavaScript in our JSX to conditionally display information

In `<App>`, between the `<CustomHeader>` and `<CustomFooter>`, replace the `<h1>Hello, world</h1>`
with a greeting (still in `<h1>`) that says 'Good Morning' or 'Good Afternoon'
as appropriate to the time of day.

### Use the `props.children` feature to render out child elements of the parent component without knowing them in advance
In `<CustomHeader>`, pull the content between the `<section>` tags out of CustomHeader.js and 
move them to be between `<CustomHeader>` and `</CustomHeader>` in `<App>`

Replace the content in `<CustomHeader>` with a call to `props.children`.

Feel free to experiment with other content. The point is that, whatever you put under 
`<CustomHeader>` is styled appropriately.

You can hard code the day of the week for now.

### Style elements according to information in `props`

Open `ThemeViewer.js`. Notice that the HTML has been defined for you.

1) Add code before the return statement to define two themes, **ocean** and **fire**.

2) The ocean theme should use the following Bootstrap classes:
  * For buttons: btn and btn-info
  * For labels: label and label-primary

3) The fire theme should use the following Bootstrap classes:
  * For buttons: btn and btn-danger 
  * For labels: label and label-warning

4) Add code which looks for `props.theme` and chooses the theme appropriately

5) Add classes to the buttons and labels using the classes set out in 3) above

6) Open App.js

7) Add `<ThemeViewer>` to `<App>` just before `<CustomFooter>`

### Testing
Load [http://localhost:3000/](http://localhost:3000/) in your browser. It should look like this: 
![Exercise 4 Solution](images/ex-04-complete.png)
