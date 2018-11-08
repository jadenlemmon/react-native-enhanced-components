import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import withSpacing from '../src/helpers/withSpacing';

const FooBar = withSpacing(View);

test('it should render component with backgroundColor', () => {
  const tree = renderer.create(<FooBar mt={10} />).toJSON();
  expect(tree.props.style[0]).toHaveProperty('marginTop');
  expect(tree).toMatchSnapshot();
});
