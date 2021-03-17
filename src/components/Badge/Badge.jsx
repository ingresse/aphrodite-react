/* Core Packages */
import React from 'react';
import propTypes from 'prop-types';

/* Hooks */
import { useWindowSize } from '../../hooks';

/* Base Components */
import Segment from '../Segment/Segment';

/* Component Itself */
function Badge({
    padding,
    radius,
    styles,
    className,

    prefix,
    suffix,
    children,

    ...rest
}) {
    /**
     * Local values
     */
    const { xs } = useWindowSize();
    const {
        children : prefixChildren  = null,
        className: prefixClassName = '',
        styles   : prefixStyles    = {},
        ...prefixProps
    } = (prefix || {});
    const {
        children : suffixChildren  = null,
        className: suffixClassName = '',
        styles   : suffixStyles    = {},
        ...suffixProps
    } = (suffix || {});

    /**
     * Render
     */
    return (
        <Segment
            {...rest}
            className={`aph-badge ${className || ''}`}
            padding={padding || (xs ? '5px 10px' : '0 10px')}
            radius={radius || 2}
            styles={{
                position  : 'relative',
                display   : 'inline-block',
                fontSize  : ((xs ? 14 : 12) + 'px'),
                lineHeight: '20px',
                ...styles,
            }}>
            {prefix && (
                <Segment
                    padding="0"
                    {...prefixProps}
                    className={`aph-badge__prefix ${prefixClassName}`}
                    styles={{
                        display     : 'inline-block',
                        marginRight : '5px',
                        paddingRight: '5px',
                        ...prefixStyles,
                    }}
                >
                    {prefixChildren || prefix}
                </Segment>
            )}
            {children}
            {suffix && (
                <Segment
                    padding="0"
                    {...suffixProps}
                    className={`aph-badge__suffix ${suffixClassName}`}
                    styles={{
                        display    : 'inline-block',
                        marginLeft : '5px',
                        paddingLeft: '5px',
                        ...prefixStyles,
                    }}
                >
                    {suffixChildren || suffix}
                </Segment>
            )}
        </Segment>
    );
}

/* Default Properties */
Badge.defaultProps = {
    /**
     * Badge's text color
     */
    color: 'white',

    /**
     * Badge's background color
     */
    background: 'secondary',

    /**
     * Badge's prefix component properties
     */
    prefix: null,

    /**
     * Badge's suffix component properties
     */
    suffix: null,

    /**
     * Badge's additional styles
     */
    styles: {},
};

/* Properties Types */
Badge.propTypes = {
    color     : propTypes.string,
    background: propTypes.string,
    prefix    : propTypes.oneOfType([ propTypes.object, propTypes.string, propTypes.node ]),
    suffix    : propTypes.oneOfType([ propTypes.object, propTypes.string, propTypes.node ]),
    styles    : propTypes.object,
};

/* Exporting */
export default Badge;
