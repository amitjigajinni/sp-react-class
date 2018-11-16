import { payee as payeeReducer } from '../payee-reducers';

describe( 'Testing payee-reducers', () => {
  let reducer, payees, payee;

  describe( 'payee reducer', () => {
    let action;
    beforeEach( () => {
      reducer = payeeReducer;
      payees = getPayees();
      payee = payees[ 0 ];
      action = {
        type: 'TOGGLE_PAYEE_ACTIVE'
      };
    } );

    test( 'TOGGLE_PAYEE_ACTIVE', () => {
      const nextState = reducer( payee, action );

      expect( nextState ).not.toBe( payee );
      expect( nextState.active ).not.toBe( payee.active );
      expect( nextState.active ).toBeFalsy();
    } );
  } );
} );

function getPayees() {
  return [
    {
      'id': '1',
      'version': 1,
      'payeeName': 'DCH Mortgages',
      'address': {
        'street': '1285 Rezlog Plaza',
        'city': 'Powhatan',
        'state': 'RI',
        'zip': '02212'
      },
      'categoryId': '102',
      'image': null,
      'motto': null,
      'active': true
    },
    {
      'id': '2',
      'version': 1,
      'payeeName': 'Ill Communication Telephones',
      'address': {
        'street': '1597 Figole Grove',
        'city': 'Akron',
        'state': 'OH',
        'zip': '66345'
      },
      'categoryId': '106',
      'image': null,
      'motto': null,
      'active': true
    },
    {
      'id': '3',
      'version': 1,
      'payeeName': 'Erol\'s Internet',
      'address': {
        'street': '453 Loma Linda Junction',
        'city': 'Kansas City',
        'state': 'KS',
        'zip': '60019'
      },
      'categoryId': '106',
      'image': null,
      'motto': null,
      'active': true
    },
    {
      'id': '4',
      'version': 1,
      'payeeName': 'Acme Products, Inc',
      'address': {
        'street': '1669 Divided Court',
        'city': 'Cheyenne',
        'state': 'WY',
        'zip': '48324'
      },
      'categoryId': '103',
      'image': null,
      'motto': null,
      'active': true
    },
    {
      'id': '5',
      'version': 1,
      'payeeName': 'Shop-Rite Grocery Store',
      'address': {
        'street': '311 St. Paul Ave.',
        'city': 'Baltimore',
        'state': 'MD',
        'zip': '08697'
      },
      'categoryId': '103',
      'image': null,
      'motto': null,
      'active': true
    }
  ];
}
