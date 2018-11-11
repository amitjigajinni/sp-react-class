import React from 'react';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';

const App = () => {
  let company = {
    name   : 'Express Scripts',
    address: '100 Forest Lane',
    city   : 'Franklin Lakes',
    state  : 'NJ',
    zip    : '07027'
  }
  return (
    <section>
      <CustomHeader today="Monday"/>
      <h1>Hello, world!</h1>
      <CustomFooter company={company}/>
    </section>
  );
};

export default App;