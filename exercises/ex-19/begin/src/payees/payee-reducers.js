import {combineReducers} from 'redux';
import {payeesDAO} from '../../data/class-data';

const payee = ( state = payeesDAO.get( 23 ), action ) => {
  switch ( action.type ) {
    case 'TOGGLE_PAYEE_ACTIVE':
      let nextState = { ...state };
      nextState.active = !nextState.active;
      return nextState;
    default:
      return state;
  }
};

const payeeApp = combineReducers({payees, payee});

export default payeeApp;