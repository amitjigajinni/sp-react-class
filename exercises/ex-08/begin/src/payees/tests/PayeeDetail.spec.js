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
