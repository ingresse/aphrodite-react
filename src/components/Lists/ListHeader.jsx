/* Packages */
import React from 'react';
import styled from 'react-emotion';

/* Constants */
import { COLORS, GRID, MEDIA_QUERIES, RADIUS } from '../../constants';

/* Wrapper styles */
const AphListHeader = styled('div')(props => ({
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

    ...props.style,
}));

/* Component */
const ListHeader = (props) => {
    return (
        <AphListHeader
            {...props}
            className={`aph-list__header ${props.className || ''}`}>
            {props.children}
        </AphListHeader>
    );
};

/* Exporting */
export default ListHeader;
