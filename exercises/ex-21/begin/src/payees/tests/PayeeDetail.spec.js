import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {payeesDAO} from '../../data/class-data';
import PayeeDetail from '../PayeeDetail';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure( { adapter: new Adapter() } );

let wrapper, payee;

beforeEach( () => {
  payee = payeesDAO.get( 23 );

  wrapper = shallow( <PayeeDetail payee={payee}/> );
} );

xtest( 'PayeeDetail has the right props', () => {
  let props = wrapper.instance().props;
  expect( props.payee ).toBe( payee );
} );

test( 'PayeeDetail renders a payee', () => {
  let text = wrapper.text();

  expect( text.includes( payee.zip ) ).toBeTruthy();
  expect( text.includes( payee.payeeName ) ).toBeTruthy();
  expect( text.includes( payee.address ) ).toBeTruthy();
  expect( text.includes( payee.city ) ).toBeTruthy();
  expect( text.includes( payee.state ) ).toBeTruthy();
  expect( text.includes( payee.zip ) ).toBeTruthy();
} );

test( 'PayeeDetail renders a categoryName', () => {
  let text = wrapper.text();
  expect( text.includes( payee.category.categoryName ) ).toBeTruthy();
} );

describe( 'PayeeDetail class changes', () => {
  test( 'PayeeDetail changes class on categoryName Salary', () => {
    let salaryPayees = payeesDAO.list( { category: { categoryName: 'Salary' } } );
    expect( salaryPayees.length ).toBeGreaterThan( 0 );

    let wrapper = shallow( <PayeeDetail payee={salaryPayees[ 0 ]}/> );
    expect( wrapper.hasClass( 'panel' ) ).toBeTruthy();
    expect( wrapper.hasClass( 'panel-success' ) ).toBeTruthy();

  } );

  test( 'PayeeDetail changes class on categoryName Clothing', () => {
    let clothingPayees = payeesDAO.list( { category: { categoryName: 'Clothing' } } );
    expect( clothingPayees.length ).toBeGreaterThan( 0 );

    let wrapper = shallow( <PayeeDetail payee={clothingPayees[ 0 ]}/> );
    expect( wrapper.hasClass( 'panel' ) ).toBeTruthy();
    expect( wrapper.hasClass( 'panel-danger' ) ).toBeTruthy();

  } );

  test( 'PayeeDetail changes class on other classes', () => {
    let stdPayees = payeesDAO.list( { category: { categoryName: 'Utilities' } } );
    expect( stdPayees.length ).toBeGreaterThan( 0 );

    let wrapper = shallow( <PayeeDetail payee={stdPayees[ 0 ]}/> );
    expect( wrapper.hasClass( 'panel' ) ).toBeTruthy();
    expect( wrapper.hasClass( 'panel-info' ) ).toBeTruthy();

  } );
} );