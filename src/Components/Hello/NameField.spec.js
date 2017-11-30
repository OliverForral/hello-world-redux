import React from 'react';
import renderer from 'react-test-renderer';
import NameField from './NameField';

it('renders correctly', () => {
  const tree = renderer
    .create(<NameField />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
