import React from 'react';
import renderer from 'react-test-renderer';

import CustomHeader from '../CustomHeader.js';

it( 'checks out against a snapshot', () => {
  const tree = renderer.create(
    <CustomHeader>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </CustomHeader>
  ).toJSON();
  expect( tree ).toMatchSnapshot();
} );