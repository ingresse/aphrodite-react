/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* UI Framework Utils */
import { COLORS } from '../../constants';

/* Component Itself */
const AphListStyled = styled.ul`
    box-sizing: border-box;

    display: block;
    margin : 0;
    padding: 0;

    list-style-type: ${props => props.type || 'none'};

    ${props => props.styles};
`;

/* Component Itself */
const List = (props) => {
    const { className } = props;

    return (
        <AphListStyled
            {...props}
            className={`aph-list ${className || ''}`}
        />
    );
};

/* Default Properties */
List.defaultProps = {
    hover : false,
    styles: {},
};

/* Properties Types */
List.propTypes = {
    hover : propTypes.bool,
    styles: propTypes.object,
};

/* Exporting */
export default List;
