import React from 'react';

const CustomHeader = ( props ) => {
  return (
    <header className="page-header">
      {props.children}
    </header>
  );
}

export default CustomHeader;
