/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* UI Framework Utils */
import { colors } from '../../utils';

/* Component Itself */
const AphListItemStyled = styled.li`
    box-sizing: border-box;

    display: block;
    margin : 0;
    padding: 10px;

    background-color: transparent;

    transition : background-color 0.25s linear;
    will-change: background-color;

    ${props => props.hoverable ? {
        '&:hover': {
            backgroundColor: colors.get('secondary', 'crystal'),
        }
    } : null}

    ${props => props.styles};
`;

/* Component Itself */
const ListItem = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <AphListItemStyled
            {...props}
            ref={ref}
            className={`aph-list__item ${className || ''}`}
        />
    );
});

/* Default Properties */
ListItem.defaultProps = {
    hoverable: false,
    styles   : {},
};

/* Properties Types */
ListItem.propTypes = {
    hoverable: propTypes.bool,
    styles   : propTypes.object,
};

/* Exporting */
export default ListItem;
