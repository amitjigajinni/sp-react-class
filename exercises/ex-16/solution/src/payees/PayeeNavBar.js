import React from 'react';

function PayeeNavBar( props ) {
  let viewRE = /#(.+)$/;

  function handleClick(e) {
    e.preventDefault();
    let viewName = viewRE.exec(e.target.href)[1];
    props.onClick(viewName);
  }

  return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">Banking</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#search" onClick={handleClick}>Search</a></li>
            <li><a href="#list" onClick={handleClick}>List</a></li>
          </ul>
        </div>
      </nav>
  );
}

export default PayeeNavBar;
