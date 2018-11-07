import React from 'react';
import renderer from 'react-test-renderer';
import { View, StyleSheet } from 'react-native';
import withStyles from '../src/helpers/withStyles';

const styles = StyleSheet.create({
  foo: {
    backgroundColor: 'tomato',
  },
});

const FooBar = withStyles(View, styles);

test('it should render component with backgroundColor', () => {
  const tree = renderer.create(<FooBar foo />).toJSON();
  expect(tree.props.style[0]).toHaveProperty('backgroundColor');
  expect(tree).toMatchSnapshot();
});
