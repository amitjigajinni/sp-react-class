import {payee as payeeReducer, toggleActive, store} from '../PayeeDetailRedux';
import {payeesDAO} from '../../data/class-data';

describe( 'Testing toggleActive() action creator', () => {

  test( 'Checking type: ', () => {

    const expectedType = 'TOGGLE_PAYEE_ACTIVE';
    const actual = toggleActive();

    expect( actual.type ).toEqual( expectedType );
  } );

} );

describe( 'Testing payee reducer', () => {
  test( 'Should return a default payee', () => {
    const expectedPayee = payeesDAO.get( 23 );

    // Note that undefined works, null does not
    const actualPayee = payeeReducer( undefined, {} );

    expect( actualPayee ).toEqual( expectedPayee );
  } );

  test( 'Should flip the active status on a payee', () => {
    const defaultPayee = payeesDAO.get( 23 );
    expect( defaultPayee.active ).toBeTruthy();

    const resultPayee = payeeReducer( undefined, { type: 'TOGGLE_PAYEE_ACTIVE' } );

    // New object
    expect( resultPayee ).not.toBe( defaultPayee );

    // Same id
    expect( resultPayee.id ).toBe( defaultPayee.id );

    // Value of "active" is flipped
    expect( resultPayee.active ).toBe( !defaultPayee.active );
    expect( resultPayee.active ).toBeFalsy();

  } );
} );

describe( 'Testing store', () => {
  test( 'Store should return initialized data', () => {
    const expectedPayee = payeesDAO.get( 23 );
    const actualPayee = store.getState();

    expect( actualPayee ).toBe( expectedPayee );
  } );

  test( 'Store should update state', () => {
    const defaultPayee = payeesDAO.get( 23 );
    expect( defaultPayee.active ).toBeTruthy();

    store.dispatch( toggleActive() );

    const actualPayee = store.getState();

    expect( actualPayee ).not.toBe( defaultPayee );
    expect( actualPayee.id ).toBe( defaultPayee.id );
    expect( actualPayee.active ).toBeFalsy();
    expect( actualPayee.active ).toBe( !defaultPayee.active );
  } );

} );