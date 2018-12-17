import React from 'react';

function Navbar( props ) {
  return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          {/*eslint-disable-next-line*/}
          <a className="navbar-brand">Banking</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {/*eslint-disable-next-line*/}
            <li className="active"><a>Payees</a></li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
