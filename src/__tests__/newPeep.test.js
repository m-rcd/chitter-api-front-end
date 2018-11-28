import React from 'react';
import renderer from 'react-test-renderer';
import NewPeep from '../components/new_peep';

it('NewPeep Snapshot', () => {
  const tree = renderer.create(<NewPeep />).toJSON();
  expect(tree).toMatchSnapshot();
});
