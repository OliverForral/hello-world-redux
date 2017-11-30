import React from 'react';
import renderer from 'react-test-renderer';
import Greeting from './Greeting';

it('renders correctly', () => {
  const tree = renderer
    .create(<Greeting />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when given a name', () => {
  const tree = renderer
    .create(<Greeting name="world" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
