/* Packages */
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

/* Constants */
import { COLORS, GRID, MEDIA_QUERIES, RADIUS } from '../../constants';

/* Wrapper styles */
const AphListGroupItem = styled('div')(props => ({
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
const ListGroupItem = forwardRef((props, ref) => {
    const { className, children } = props;

    return (
        <AphListGroupItem
            {...props}
            ref={forwardRef}
            className={`${props.header ? 'aph-list-group__header ' : 'aph-list-group__item '}${className || ''}`}>
            {children}
        </AphListGroupItem>
    );
});

/* Exporting */
export default ListGroupItem;
