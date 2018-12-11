/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Constants */
import { COLORS, GRID, MEDIA_QUERIES, RADIUS } from '../../constants';

/* Wrapper styles */
const AphListItem = styled('div')(props => ({
    boxSizing: 'border-box',
    position : 'relative',
    overflow : 'hidden',
    display  : 'block',
    padding  : (((GRID.PADDING / 2) + GRID.UNIT) + ' ' + (GRID.PADDING + GRID.UNIT)),
    margin   : 0,

    [MEDIA_QUERIES.LT.SM]: {
        paddingRight: ((GRID.PADDING - 5) + GRID.UNIT),
        paddingLeft : ((GRID.PADDING - 5) + GRID.UNIT),
    },

    ...props.styles,
}));

/* Component */
const ListItem = (props) => {
    return (
        <AphListItem
            {...props}
            className={`${props.header ? 'aph-list__header ' : 'aph-list__item '}${props.className || ''}`}>
            {props.children}
        </AphListItem>
    );
};

/* Exporting */
export default ListItem;
