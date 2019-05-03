/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Framework Definitions */
import { COLORS, RADIUS } from '../../constants';

/* Component Styles */
const AphCardStyled = styled.div`
    display: block;
    padding: 10px;
    border-radius: ${RADIUS.SM}px;
    color      : ${COLORS.BLACK};
    background : ${COLORS.WHITE};
    box-shadow : 0 0 5px ${COLORS.GET('BLACK', 0.25)};
    transition : box-shadow 0.25s linear, padding 0.25s linear;
    will-change: box-shadow, padding;

    &.active,
    &:hover {
        box-shadow: 0 0 20px ${COLORS.GET('BLACK', 0.25)};
    }

    .aph-card {
        box-shadow: none !important;
    }

    ${props => props.styles};
`;

/* Component Itself */
const Card = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <AphCardStyled
            {...props}
            ref={ref}
            className={`aph-card ${className || ''}`}
        />
    );
});

/* Default Properties */
Card.defaultProps = {
    styles: {},
};

/* Properties Types */
Card.propTypes = {
    styles: propTypes.object,
};

/* Exporting */
export default Card;
