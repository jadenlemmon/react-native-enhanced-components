import { View as RNView } from 'react-native';
import withStyles from '../helpers/withStyles';
import flex from '../styles/flex';

export default withStyles(
  withStyles(RNView, Object.keys(flex)),
  ['m', 'p', 'mt', 'mr', 'mb', 'ml', 'pt', 'pr', 'pb', 'pl'],
  true,
);
