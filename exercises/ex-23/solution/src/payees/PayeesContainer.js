import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom'
import PayeeList from './PayeeList';
import PayeeBrowser from './PayeeBrowser';

class PayeesContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="list-unstyled">
            <li><Link to="/">List</Link></li>
            <li><Link to="/detail">Detail</Link></li>
          </ul>
        </div>
        <div>
          <Route exact path="/" component={PayeeList}/>
          <Route path="/list" component={PayeeList}/>
          <Route path="/detail" component={PayeeBrowser}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    view: state.view
  };
};

PayeesContainer = connect( mapStateToProps )( PayeesContainer );

export default PayeesContainer;
