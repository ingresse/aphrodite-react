/* Packages */
import React from 'react';
import styled from 'react-emotion';
import propTypes from 'prop-types';

/* Constants */
import { COLORS, GRID, MEDIA_QUERIES, RADIUS } from '../../constants';

/* Component Styles */
const BadgeWrapper = styled('span')(props => ({
    boxSizing    : 'border-box',
    position     : 'relative',
    display      : props.block ? 'block' : 'inline-block',
    minWidth     : (!isNaN(props.width) ? (parseInt(props.width, 10) + GRID.UNIT) : (props.width || null)),
    padding      : '5px 15px',
    margin       : 0,
    minHeight    : '30px',
    verticalAlign: 'top',

    fontSize     : '12px',
    lineHeight   : '20px',
    textTransform: 'uppercase',
    textAlign    : (props.prefix ? 'left' : 'center'),

    boxShadow   : `0 0 1px 0 ${COLORS.GET('DARK_BLACK', 0.2)}`,
    borderRadius: (RADIUS.XS + GRID.UNIT),

    '&:after': {
        display: 'table',
        clear  : 'both',
    },

    [MEDIA_QUERIES.LT.SM]: {
        display   : (props.blockXs ? 'block' : null),
        fontSize  : '16px',
        lineHeight: '20px',

        paddingRight: '15px',
        paddingLeft : '15px',

        borderRadius: RADIUS.XXS + GRID.UNIT,
    },

    ...props.styles,
}));

/* Component Children Style */
const BadgePrefixWrapper = styled('span')(props => ({
    boxSizing: 'border-box',
    display  : 'inline-block',
    padding  : '5px 15px',
    margin   : '-5px 10px -5px -15px',
    textAlign: 'center',

    borderRadius: `${RADIUS.XS + GRID.UNIT} 0 0 ${RADIUS.XS + GRID.UNIT}`,

    [MEDIA_QUERIES.LT.SM]: {
        fontSize  : '16px',
        lineHeight: '20px',

        margin : '-10px 10px -10px -15px',
        padding: '5px 6px',

        borderRadius: `${RADIUS.XS + GRID.UNIT} 0 0 ${RADIUS.XS + GRID.UNIT}`,
    },

    ...props.styles,
}));

/* Component */
const Badge = (props) => {
    const filled   = COLORS.FILL(props.color);
    const modifier = !props.sm ? {} : {
        minHeight : '20px',
        fontSize  : '10px',
        lineHeight: '10px',

        paddingRight: '8px',
        paddingLeft : '8px',

        borderRadius: RADIUS.XXS + GRID.UNIT,
    };
    let prefix = !props.sm ? {} : {
        paddingRight: '8px',
        paddingLeft : '8px',
        marginLeft  : '-8px',
        marginRight : '6px',
        borderRadius: `${RADIUS.XXS + GRID.UNIT} 0 0 ${RADIUS.XXS + GRID.UNIT}`,

        [MEDIA_QUERIES.LT.SM]: {
            fontSize  : '16px',
            lineHeight: '20px',

            margin : '-10px 10px -10px -15px',
            padding: '5px 8px',

            borderRadius: `${RADIUS.XS + GRID.UNIT} 0 0 ${RADIUS.XS + GRID.UNIT}`,
        },
    };

    if (props.color) {
        let toned = (COLORS.TONES[props.color.toUpperCase()]);

        if (toned) {
            prefix = Object.assign({}, prefix, {
                backgroundColor: toned,
            });
        }
    }

    return (
        <BadgeWrapper
            {...props}
            styles={Object.assign({}, modifier, filled, props.styles)}
            className={`aph-badge ${props.className || ''}`}>
            {(!props.prefix) ? null : (
                <BadgePrefixWrapper
                    {...props.prefixProps}
                    styles={Object.assign({}, prefix, props.prefixStyles)}
                    className={`aph-badge__prefix ${props.prefixClassName || ''}`}>
                    {props.prefix}
                </BadgePrefixWrapper>
            )}
            {props.children}
        </BadgeWrapper>
    );
};

/* Properties Types */
Badge.propTypes = {
    block  : propTypes.bool,
    blockXs: propTypes.bool,
    sm     : propTypes.bool,

    width    : propTypes.any,
    styles   : propTypes.object,
    className: propTypes.string,

    prefixStyles   : propTypes.object,
    prefixClassName: propTypes.string,
};

/* Exporting */
export default Badge;
