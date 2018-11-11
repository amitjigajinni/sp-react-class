import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import PayeesContainer from '../PayeesContainer';
import PayeeList from '../PayeeList';
import PayeeRow from '../PayeeRow';
import {payeesDAO} from '../../../data/class-data';

let payees, wrapper;

beforeEach( () => {
  wrapper = mount( <PayeesContainer/> );
  payees = payeesDAO.list();

} );

test( 'Rendering the list', () => {
  let list = wrapper.find( PayeeList );
  let firstRow = list.find( PayeeRow ).at( 0 );

  expect( firstRow.find( 'td' ).at( 0 ).text() ).toMatch( payees[ 0 ].payeeName );

} );

test( 'Sorting the list', () => {
  let headers = wrapper.find( 'thead > tr > th' );
  let initialFirstRow = wrapper.find( PayeeRow ).at( 0 );

  expect( headers.length ).toBe( 3 );

  headers.at( 0 ).simulate( 'click' );
  let laterFirstRow = wrapper.find( PayeeRow ).at( 0 );

  expect( initialFirstRow ).not.toBe( laterFirstRow );

  expect( initialFirstRow.text() ).not.toBe( laterFirstRow.text() );
} );

test( 'handleSort was called', () => {
  let sortSpy = sinon.spy( wrapper.get( 0 ), 'handleSort' );
  wrapper.update(); // Called because https://github.com/airbnb/enzyme/issues/365
  // console.log( 'sortSpy: ', sortSpy );

  wrapper.find( 'thead > tr > th' ).at( 0 ).simulate( 'click' );
  // console.log( 'PayeesContainer: ', wrapper.get(0) );

  expect( sortSpy.called ).toBeTruthy();

} );

test( 'Selecting a payee', () => {
  expect( wrapper.state().payee ).toBeNull();
  expect( wrapper.state().view ).toBe( 'list' );

  wrapper.find( PayeeRow ).at( 0 ).simulate( 'click' );

  expect( wrapper.state().payee ).toBeDefined();
  expect( wrapper.state().view ).toBe( 'detail' );

} );

test( 'Handling next and previous', () => {
  let sortSpy = sinon.spy( wrapper.get( 0 ), 'handleNextPrev' );
  wrapper.update();
  wrapper.find( PayeeRow ).at( 0 ).simulate( 'click' );
  wrapper.find( 'button[name="previous"]' ).simulate( 'click' );

  expect( sortSpy.called ).toBeTruthy();
} );
