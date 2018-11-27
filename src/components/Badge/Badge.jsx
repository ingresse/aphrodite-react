/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Constants */
import { COLORS, RADIUS } from '../../constants';

/* Component Styles */
const BadgeWrapper = styled('span')(props => ({
    position     : 'relative',
    display      : props.block ? 'block' : 'inline-block',
    padding      : '6px 15px 4px',
    margin       : 0,
    minHeight    : '30px',
    verticalAlign: 'top',

    fontSize     : '12px',
    lineHeight   : '20px',
    textTransform: 'uppercase',
    textAlign    : 'center',

    color       : COLORS.WHITE,
    background  : COLORS.LIGHT_GREY,
    boxShadow   : COLORS.GET('DARK_BLACK', 0.2),
    borderRadius: RADIUS,

    '&:after': {
        display: 'table',
        clear  : 'both',
    }

    ...props.style,
}));

/* Component Children Style */
const BadgePrefixWrapper = styled('span')(props => ({
    display: 'inline-block',
    padding: '6px 15px 4px',
    margin : '-6px 10px -4px -15px',

    borderRadius: '4px 0 0 4px',

    ...props.style,
}));

/* Component */
const Badge = (props) => {
    return (
        <BadgeWrapper {...props}>
            {(!props.prefix) ? null : (
                <BadgePrefixWrapper style={props.prefixStyle}>
                    {props.prefix}
                </BadgePrefixWrapper>
            )}
            {props.children}
        </BadgeWrapper>
    );
};

/* Exporting */
export default Badge;
