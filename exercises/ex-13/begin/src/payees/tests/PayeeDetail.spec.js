import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {payeesDAO} from '../../data/class-data';
import PayeeDetail from '../PayeeDetail';

describe( 'PayeeDetail snapshots', () => {
  test( 'renders correctly', () => {
    let payee = payeesDAO.get( 23 );
    const tree = renderer.create(
      <PayeeDetail payee={payee}/>
    ).toJSON();
    expect( tree ).toMatchSnapshot();
  } );

  test( 'renders a "Clothing" payee differently', () => {
    let clothingPayees = payeesDAO.list( { category: { categoryName: 'Clothing' } } );
    expect( clothingPayees.length ).toBeGreaterThan( 0 );

    const tree = renderer.create(
      <PayeeDetail payee={clothingPayees[ 0 ]}/>
    ).toJSON();

    expect( tree ).toMatchSnapshot();
  } );
} );

describe( 'PayeeDetail standard tests', () => {

  let wrapper, payee;

  beforeEach( () => {
    payee = payeesDAO.get( 23 );

    wrapper = shallow( <PayeeDetail payee={payee}/> );
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

  test( 'PayeeDetail has the right props', () => {
    let props = wrapper.instance().props;
    expect( props.payee ).toBe( payee );
  } );

  test( 'PayeeDetail renders a categoryName', () => {
    let text = wrapper.text();
    expect( text.includes( payee.category.categoryName ) ).toBeTruthy();
  } );

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
