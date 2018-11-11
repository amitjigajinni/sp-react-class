# Exercise 5 Instructions
## Objectives
1) Create a test spec for CustomHeader that uses snapshots
2) Create a test spec for CustomFooter that uses snapshots
3) Experiment with changes to the two components

### Create a test spec for CustomHeader that uses snapshots
Open `src/tests/CustomHeader.spec.js`. Add code to generate a snapshot 
from a standard rendering of `<CustomHeader`. Remember that `<CustomHeader>` is
intended to wrap around and render content.

### Create a test spec for CustomFooter that uses snapshots
Open `src/tests/CustomFooter.spec.js`. Add code to generate a snapshot 
from a standard rendering of `<CustomFooter`. Remember that `<CustomFooter>` 
should receive a `company` object. You will have to mock one out.

Run `npm test` to generate snapshots. Leave it running for the next section.

### Experiment with changes to the two components
Make changes to the content of CustomHeader.spec.js. See what happens in the 
window where you are running `npm test`.

Do the same for CustomFooter.spec.js.

### Challenge
Add standard testing (that is, not using a snapshot) to `CustomHeader.spec.js` 
and `CustomFooter.spec.js`.

