import React from 'react';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import ThemeViewer from './ThemeViewer';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';

const App = () => {
  let company = {
    name   : 'Express Scripts',
    address: '100 Forest Lane',
    city   : 'Franklin Lakes',
    state  : 'NJ',
    zip    : '07027'
  };

  let loggedIn = false,
    loginComponent;

  if ( loggedIn ) {
    loginComponent = <LoggedIn/>;
  } else {
    loginComponent = <NotLoggedIn/>;
  }

  let today = new Date();
  return (
    <section>
      <CustomHeader>
        <h1>Super-Fake Banking Services</h1>
        <div>Serving the community since Monday</div>
      </CustomHeader>
      {loginComponent}
      <h1>{ today.getHours() < 12 ? 'Good morning' : 'Good afternoon'}, world</h1>

      <ThemeViewer theme="fire"/>
      <CustomFooter company={company}/>
    </section>
  );
};

export default App;