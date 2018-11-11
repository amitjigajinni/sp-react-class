import React, {Component} from 'react';

import {payeesDAO} from '../data/class-data';

// Add action here
const toggleActive = () => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

class PayeeDetailRedux extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      payee: payeesDAO.get( 23 )
    };

    this.toggleActive = this.toggleActive.bind( this );
  }

  toggleActive() {
    const payee = { ...this.state.payee };
    payee.active = !payee.active;
    this.setState( { payee } );
  }

  render() {
    let classes = 'panel ';
    switch ( this.state.payee.category.categoryName ) {
      case 'Salary':
      case 'Other Income':
      case 'Interest':
        classes += 'panel-success';
        break;
      case 'Clothing':
      case 'Housing':
      case 'Food':
        classes += 'panel-danger';
        break;
      default:
        classes += 'panel-info';
        break;
    }

    return (
      <div className={classes}>
        <div className="panel-heading">{this.state.payee.payeeName}</div>
        <ul className="list-group">
          <li className="list-group-item">{this.state.payee.payeeName}</li>
          <li className="list-group-item">{this.state.payee.address}</li>
          <li className="list-group-item">{this.state.payee.city}, {this.state.payee.state} {this.state.payee.zip}</li>
          <li className="list-group-item">Category: {this.state.payee.category.categoryName}</li>
          <li className="list-group-item">
            Status: <span className={this.state.payee.active ? 'payee-active' : 'payee-inactive'}>
              {this.state.payee.active ? 'Active' : 'Inactive'}
            </span> &nbsp;
            <button onClick={this.toggleActive}
                    className="btn btn-default">
              Toggle
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default PayeeDetailRedux;