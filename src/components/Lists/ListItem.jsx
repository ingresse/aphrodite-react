/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* UI Framework Utils */
import { COLORS } from '../../constants';

/* Component Itself */
const AphListItemStyled = styled.li`
    box-sizing: border-box;

    display: block;
    margin : 0;
    padding: 10px;

    background-color: transparent;

    transition : background-color 0.25s linear;
    will-change: background-color;

    ${props => props.hover ? {
        '&:hover': {
            backgroundColor: COLORS.GET('PRIMARY', 0.1),
        }
    } : null}

    ${props => props.styles};
`;

/* Component Itself */
const ListItem = (props) => {
    const { className } = props;

    return (
        <AphListItemStyled
            {...props}
            className={`aph-list__item ${className || ''}`}
        />
    );
};

/* Default Properties */
ListItem.defaultProps = {
    hover : false,
    styles: {},
};

/* Properties Types */
ListItem.propTypes = {
    hover : propTypes.bool,
    styles: propTypes.object,
};

/* Exporting */
export default ListItem;
