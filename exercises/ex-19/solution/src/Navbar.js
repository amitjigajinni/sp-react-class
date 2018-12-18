import React from 'react';
import { Link } from 'react-router-dom';

function Navbar( props ) {
  return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Banking</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {/* If you want the "active" class to move to the actually active link, consider
                looking up the documentation for NavLink */}
            <li><Link to="/categories">Categories</Link></li>
            <li className="active"><Link to="/payees">Payees</Link></li>
            <li><Link to="/tx">Transactions</Link></li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
