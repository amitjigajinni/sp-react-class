import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test( 'Adds 2 and 2 to equal 4', () => {
  expect( 2 + 2 ).toBe( 4 );
} );

test('Contains "Hello"', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.text()).toMatch(/Hello/);
});