import {combineReducers} from 'redux';
import _sortBy from 'lodash/sortBy';

const payee = ( state = {}, action ) => {
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

const payees = ( state = [], action ) => {

  switch ( action.type ) {
    case 'SET_SORT_FIELD':
      if ( action.lastSort === action.nextSort ) {
        return [ ...state ].reverse();
      } else {
        return _sortBy( state, [ action.nextSort, action.lastSort ] );
      }
    case 'PAYEES_FETCH_DATA_SUCCESS':
      return action.payees;
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

const payeesHasErrored = ( state = false, action ) => {
  switch ( action.type ) {
    case 'PAYEES_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
};

const payeesIsLoading = ( state = false, action ) => {
  switch ( action.type ) {
    case 'PAYEES_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
};

const payeeApp = combineReducers( { payees, payee, payeesHasErrored, payeesIsLoading, view, sortField } );

export default payeeApp;

export {payees};