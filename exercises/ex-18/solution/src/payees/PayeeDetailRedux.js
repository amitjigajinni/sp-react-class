import React, {Component} from 'react';
import {createStore} from 'redux';

import {payeesDAO} from '../data/class-data';

// Add action here
const toggleActive = () => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

// Add reducer here
const payee = ( state = payeesDAO.get( 23 ), action ) => {
  if ( action.type === 'TOGGLE_PAYEE_ACTIVE' ) {
    let nextState = { ...state };
    nextState.active = !nextState.active;
    return nextState;
  } else {
    return state;
  }
};

// Add store here
const store = createStore( payee );

class PayeeDetailRedux extends Component {
  constructor( props ) {
    super( props );

    // Initialize state with information from the store here
    this.state = {
      payee: store.getState()
    };

    // Subscribe to the store here
    store.subscribe( () => this.setState( {
      payee: store.getState()
    } ) );

    this.toggleActive = this.toggleActive.bind( this );
  }

  toggleActive() {
    // Dispatch action here
    store.dispatch( toggleActive() );
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

export {toggleActive, payee, store};