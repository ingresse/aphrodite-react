/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Constants */
import { COLORS, GRID, RADIUS } from '../../constants';

/* Wrapper styles */
const AphListGroup = styled('ul')(props => ({
    boxSizing: 'border-box',
    position : 'relative',
    overflow : 'hidden',
    display  : 'block',
    width    : '100%',
    padding  : 0,
    margin   : 0,
    listStyle: 'none',

    borderRadius: ((props.radius || RADIUS) + GRID.UNIT),
    boxShadow   : `
        inset 0 -1px 0 0 ${COLORS.LIGHT_GREY},
        inset -1px 0 0 0 ${COLORS.LIGHT_GREY},
        inset 1px 0 0 0 ${COLORS.LIGHT_GREY},
        inset 0 1px 0 0 ${COLORS.LIGHT_GREY}
    `,

    '.aph-list__header': {
        backgroundColor: COLORS.DARK_SMOKE,

        '&:first-of-type': {
            borderTopRightRadius: (((props.radius || RADIUS) + 1) + GRID.UNIT),
            borderTopLeftRadius : (((props.radius || RADIUS) + 1) + GRID.UNIT),
        },

        '&:last-of-type': {
            borderBottomRightRadius: (((props.radius || RADIUS) + 1) + GRID.UNIT),
            borderBottomLeftRadius : (((props.radius || RADIUS) + 1) + GRID.UNIT),
        },
    },

    '.aph-list__item': {
        backgroundColor: COLORS.SMOKE,

        '&:last-of-type': {
            borderBottomRightRadius: (((props.radius || RADIUS) + 1) + GRID.UNIT),
            borderBottomLeftRadius : (((props.radius || RADIUS) + 1) + GRID.UNIT),
        },
    },

    ...props.style,
}));

/* Component */
const ListGroup = (props) => {
    return (
        <AphListGroup
            {...props}
            className={`aph-list-group ${props.className || ''}`}>
            {props.children}
        </AphListGroup>
    );
};

/* Exporting */
export default ListGroup;
