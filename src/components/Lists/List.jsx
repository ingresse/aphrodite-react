/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* UI Framework Utils */
import { RADIUS } from '../../constants';

/* Component Itself */
const AphListStyled = styled.ul`
    box-sizing: border-box;

    display: block;
    margin : 0;
    padding: 0;

    overflow: hidden;
    border-radius: ${RADIUS.SM}px;

    list-style-type: ${props => props.type || 'none'};

    ${props => props.styles};
`;

/* Component Itself */
const List = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <AphListStyled
            role="listbox"
            {...props}
            ref={ref}
            className={`aph-list ${className || ''}`}
        />
    );
});

/* Default Properties */
List.defaultProps = {
    styles: {},
};

/* Properties Types */
List.propTypes = {
    styles: propTypes.object,
};

/* Exporting */
export default List;
