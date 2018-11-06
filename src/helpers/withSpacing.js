import React from 'react';
import { pick, get } from 'lodash';
import spacing, { KEYS } from '../styles/spacing';

export default function withSpacing(Component) {
    return class extends React.Component {
        get styles() {
            const { props } = this;

            // get style prop styles
            const styleProp = get(props, 'style', {});

            // get spacing props and map to proper values
            const grabbedStyles = Object.keys(pick(props, KEYS)).map(
                key => spacing[`${key}${props[key]}`]
            );

            // grab other styles
            const other = Array.isArray(styleProp) ? styleProp : [styleProp];

            // merge all
            return [...grabbedStyles, ...other];
        }

        render() {
            return <Component {...this.props} style={this.styles} />;
        }
    };
}
