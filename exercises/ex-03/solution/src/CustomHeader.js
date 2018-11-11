import React from 'react';

const CustomHeader = ( props ) => {
  return (
    <header className="page-header">
      <h1>Super-Fake Banking Services</h1>
      <div>Serving the community since {props.today}</div>
    </header>
  );
};

export default CustomHeader;
