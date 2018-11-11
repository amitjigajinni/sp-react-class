import React, {Component} from 'react';
import {Route, Link, withRouter} from 'react-router-dom'
import PayeeList from './PayeeList';
import PayeeBrowser from './PayeeBrowser';

class PayeesContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="list-unstyled">
            <li><Link to="/">Back to List</Link></li>
          </ul>
        </div>
        <div>
          <Route exact path="/" component={PayeeList}/>
          <Route path="/list" component={PayeeList}/>
          <Route path="/detail/:id" component={PayeeBrowser}/>
        </div>
      </div>
    );
  }
}

PayeesContainer = withRouter( PayeesContainer );

export default PayeesContainer;
