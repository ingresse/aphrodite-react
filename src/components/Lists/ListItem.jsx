/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Constants */
import { COLORS, GRID, MEDIA_QUERIES, RADIUS } from '../../constants';

/* Wrapper styles */
const AphListItem = styled('li')(props => ({
    boxSizing: 'border-box',
    position : 'relative',
    overflow : 'hidden',
    display  : 'block',
    padding  : (((GRID.PADDING / 2) + GRID.UNIT) + ' ' + (GRID.PADDING + GRID.UNIT)),
    margin   : 0,

    boxShadow   : `
        inset 0 -1px 0 0 ${COLORS.LIGHT_GREY},
        inset -1px 0 0 0 ${COLORS.LIGHT_GREY},
        inset 1px 0 0 0 ${COLORS.LIGHT_GREY},
        inset 0 1px 0 0 ${COLORS.LIGHT_GREY}
    `,

    '+ .aph-list__item, + .aph-list__header': {
        boxShadow   : `
            inset 0 -1px 0 0 ${COLORS.LIGHT_GREY},
            inset -1px 0 0 0 ${COLORS.LIGHT_GREY},
            inset 1px 0 0 0 ${COLORS.LIGHT_GREY},
            inset 0 0 0 0 ${COLORS.LIGHT_GREY}
        `,
    },

    [MEDIA_QUERIES.LT.SM]: {
        paddingRight: ((GRID.PADDING - 5) + GRID.UNIT),
        paddingLeft : ((GRID.PADDING - 5) + GRID.UNIT),
    },

    ...props.style,
}));

/* Component */
const ListItem = (props) => {
    return (
        <AphListItem
            {...props}
            className={`aph-list__item ${props.className || ''}`}>
            {props.children}
        </AphListItem>
    );
};

/* Exporting */
export default ListItem;
