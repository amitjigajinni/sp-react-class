import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import PayeesContainer from '../PayeesContainer';
import {payeesDAO} from '../../data/class-data';
import PayeeDetail from '../PayeeDetail';

let payees, wrapper;

beforeEach( () => {
  wrapper = mount( <PayeesContainer/> );
  payees = payeesDAO.list();

} );

test( 'Handling next and previous', () => {
  let sortSpy = sinon.spy( wrapper.get( 0 ), 'handleNextPrev' );
  expect(sortSpy.called).toBeFalsy();
  wrapper.update();
  wrapper.find( 'button[name="previous"]' ).simulate( 'click' );

  expect( sortSpy.called ).toBeTruthy();
} );

test( 'Check initial payee', () => {
  let expectedPayee = payees[ 0 ];

  // Check state
  expect( wrapper.state( 'payee' )).toBe( expectedPayee );

  // Check references
  expect( wrapper.find( PayeeDetail ).prop( 'payee' ) ).toEqual( expectedPayee );

  // Check content
  expect( wrapper.find( '.panel-heading' ).text() ).toMatch( expectedPayee.payeeName );
} );

test( 'Check next payee', () => {
  let expectedPayee = payees[ 1 ];

  wrapper.find( 'button[name="next"]' ).simulate( 'click' );

  // Check state
  expect( wrapper.state( 'payee' )).toBe( expectedPayee );

  // Check references
  expect( wrapper.find( PayeeDetail ).prop( 'payee' ) ).toEqual( expectedPayee );

  // Check content
  expect( wrapper.find( '.panel-heading' ).text() ).toMatch( expectedPayee.payeeName );

  // Check the negative
  expect( wrapper.find( PayeeDetail ).prop( 'payee' ) ).not.toEqual( payees[ 0 ] );
  expect( wrapper.find( '.panel-heading' ).text() ).not.toMatch( payees[ 0 ].payeeName );
  expect( wrapper.state( 'payee' )).not.toBe( payees[0] );

} );
