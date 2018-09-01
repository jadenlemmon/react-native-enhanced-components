import { View as RNView } from 'react-native';
import withStyles from 'app/helpers/withStyles';
import { flex } from 'app/styles/flex';

export const View = withStyles(
  withStyles(RNView, Object.keys(flex)),
  ['m', 'p', 'mt', 'mr', 'mb', 'ml', 'pt', 'pr', 'pb', 'pl'],
  true
);
