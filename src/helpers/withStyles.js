import React from 'react';
import { pick, get } from 'lodash';
import gs from '../styles';

/**
 * Map props to global styles. Use value uses value of prop
 * @param {*} props
 * @param {*} useValue
 */
const mapStyle = (props, useValue) => Object.keys(props).map(key => (useValue ? gs[`${key}${props[key]}`] : gs[`${key}`]));

export default function withStyles(
  WrappedComponent,
  styles,
  useValues = false,
) {
  return class extends React.Component {
    getStyles() {
      // get other styles
      const otherStyles = get(this.props, 'style', {});

      const grabbedStyles = mapStyle(pick(this.props, styles), useValues);

      // grab other styles
      const other = Array.isArray(otherStyles) ? otherStyles : [otherStyles];

      // merge all
      return [...other, ...grabbedStyles];
    }

    render() {
      return <WrappedComponent {...this.props} style={this.getStyles()} />;
    }
  };
}
