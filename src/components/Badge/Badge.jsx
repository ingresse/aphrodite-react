/* Core Packages */
import React from 'react';
import propTypes from 'prop-types';

/* Hooks */
import {
    useWindowSize,
} from '../../hooks';

/* Base Components */
import {
    Segment,
} from '../';

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
            {(!prefix) ? (null) : (
                <Segment
                    padding="0"
                    {...prefix}
                    className={`aph-badge__prefix ${prefix.className || ''}`}
                />
            )}
            {children}
            {(!suffix) ? (null) : (
                <Segment
                    padding="0"
                    {...suffix}
                    className={`aph-badge__suffix ${suffix.className || ''}`}
                />
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
    prefix    : propTypes.object,
    suffix    : propTypes.object,
    styles    : propTypes.object,
};

/* Exporting */
export default Badge;
