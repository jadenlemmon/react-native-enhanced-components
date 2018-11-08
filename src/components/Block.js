import { View as RNView } from 'react-native';
import withStyles from '../helpers/withStyles';
import withSpacing from '../helpers/withSpacing';
import flex from '../styles/flex';

export default withStyles(withSpacing(RNView), flex);
