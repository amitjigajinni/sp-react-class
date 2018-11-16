import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import BrowserButtons from '../BrowserButtons';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure( { adapter: new Adapter() } );

let wrapper, onNextPrevSpy, onBackSpy;

beforeEach( () => {
  onNextPrevSpy = sinon.spy();
  onBackSpy = sinon.spy();
  wrapper = shallow( <BrowserButtons onNextPrev={ onNextPrevSpy } onBack={ onBackSpy }/> );
} );

test( 'Register a "Previous" click', () => {
  wrapper.find( '[name="previous"]' ).simulate( 'click' );

  expect( onNextPrevSpy.callCount ).toBeGreaterThan( 0 );
} );

test( 'Register a "Next" click', () => {
  wrapper.find( '[name="next"]' ).simulate( 'click' );

  expect( onNextPrevSpy.callCount ).toBeGreaterThan( 0 );
} );

test( 'Register a "onBack" click', () => {
  wrapper.findWhere( e => {
           return e.text().includes( 'Back' ) && e.is( 'button' );
         } )
         .simulate( 'click' );

  expect( onBackSpy.callCount ).toBeGreaterThan( 0 );
} );
