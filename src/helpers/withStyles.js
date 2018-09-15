import React from 'react';
import { pick, get } from 'lodash';
import gs from '../styles';

/**
 * Map props to global styles. Use value uses value of prop
 * @param {*} props
 * @param {*} useValue
 */
const mapStyle = (props, useValue, fromStyles) => Object.keys(props).map(key => (useValue ? fromStyles[`${key}${props[key]}`] : fromStyles[`${key}`]));

export default function withStyles(
  WrappedComponent,
  styles,
  useValues = false,
  fromStyles = gs,
) {
  return class extends React.Component {
    getStyles() {
      // get other styles
      const otherStyles = get(this.props, 'style', {});

      const grabbedStyles = mapStyle(pick(this.props, styles), useValues, fromStyles);

      // grab other styles
      const other = Array.isArray(otherStyles) ? otherStyles : [otherStyles];

      // merge all
      return [...grabbedStyles, ...other];
    }

    render() {
      return <WrappedComponent {...this.props} style={this.getStyles()} />;
    }
  };
}
