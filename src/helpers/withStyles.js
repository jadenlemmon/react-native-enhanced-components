import React from 'react';
import { pick, get } from 'lodash';

const mapStyle = (props, styles) => Object.keys(props).map(key => styles[key]);

export default function withStyles(WrappedComponent, styles) {
    return class extends React.Component {
        get styles() {
            const { props } = this;

            // get other styles
            const otherStyles = get(props, 'style', {});

            const grabbedStyles = mapStyle(
                pick(props, Object.keys(styles)),
                styles
            );

            // grab other styles
            const other = Array.isArray(otherStyles)
                ? otherStyles
                : [otherStyles];

            // merge all
            return [...grabbedStyles, ...other];
        }

        render() {
            return <WrappedComponent {...this.props} style={this.styles} />;
        }
    };
}
