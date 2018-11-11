import {combineReducers} from 'redux';
import {payeesDAO} from '../data/class-data';
import _sortBy from 'lodash/sortBy';

const payee = ( state = payeesDAO.get( 23 ), action ) => {
  switch ( action.type ) {
    case 'TOGGLE_PAYEE_ACTIVE':
      let nextState = { ...state };
      nextState.active = !nextState.active;
      return nextState;

    case 'SET_PAYEE':
      return { ...action.payee };

    case 'GET_NEXT_PREV_PAYEE':
      let pos = -1;
      action.payees.find( ( p, idx ) => {
        pos = idx;
        return p.id === action.payee.id;
      } );
      let next;

      if ( action.direction === 'next' ) {
        next = Math.min( pos + 1, action.payees.length - 1 );
      } else {
        next = Math.max( pos - 1, 0 );
      }

      return action.payees[ next ];

    default:
      return state;
  }
};

const payees = ( state = payeesDAO.list(), action ) => {

  switch ( action.type ) {
    case 'SET_SORT_FIELD':
      if ( action.lastSort === action.nextSort ) {
        return [ ...state ].reverse();
      } else {
        return _sortBy( state, [ action.nextSort, action.lastSort ] );
      }
    default:
      return state;
  }
};

const view = ( state = 'list', action ) => {
  switch ( action.type ) {
    case 'SWITCH_VIEW':
    case 'SET_PAYEE':
      state = action.view;
      return action.view;
    default:
      return state;
  }
};

const sortField = ( state = '', action ) => {
  switch ( action.type ) {
    case 'SET_SORT_FIELD':
      return action.nextSort;
    default:
      return state;
  }
};

const payeeApp = combineReducers( { payees, payee, view, sortField } );

export default payeeApp;

export {payees};