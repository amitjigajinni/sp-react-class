import {combineReducers} from 'redux';
import {payeesDAO} from '../data/class-data';

const payee = ( state = payeesDAO.get( 23 ), action ) => {
  switch ( action.type ) {
    case 'TOGGLE_PAYEE_ACTIVE':
      let nextState = { ...state };
      nextState.active = !nextState.active;
      return nextState;

    case 'GET_NEXT_PREV_PAYEE':
      let payeeList = payees( undefined, action );
      let pos = payeeList.indexOf( action.payee );
      let next;

      if ( action.direction === 'next' ) {
        next = Math.min( pos + 1, payeeList.length - 1 );
      } else {
        next = Math.max( pos - 1, 0 );
      }

      return payeeList[ next ];

    default:
      return state;
  }
};

const payees = ( state = payeesDAO.list(), action ) => {
  switch ( action.type ) {
    case 'GET_NEXT_PREV_PAYEE':
      return state;
    default:
      return state;
  }
};

const payeeApp = combineReducers( { payees, payee } );

export default payeeApp;
