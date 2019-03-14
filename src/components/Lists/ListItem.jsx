/* Packages */
import React from 'react';
import styled from '@emotion/styled';

/* Constants */
import { COLORS, GRID, MEDIA_QUERIES, RADIUS } from '../../constants';

/* Wrapper styles */
const AphListItem = styled('div')(props => ({
    boxSizing: 'border-box',
    position : 'relative',
    overflow : 'hidden',
    display  : 'block',
    padding  : (((GRID.CONTAINER_PADDING  / 2) + GRID.UNIT) + ' ' + (GRID.CONTAINER_PADDING  + GRID.UNIT)),
    margin   : 0,

    [MEDIA_QUERIES.LT.SM]: {
        paddingRight: ((GRID.CONTAINER_PADDING  - 5) + GRID.UNIT),
        paddingLeft : ((GRID.CONTAINER_PADDING  - 5) + GRID.UNIT),
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
