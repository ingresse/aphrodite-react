/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Framework Definitions */
import { RADIUS } from '../../constants';
import { colors } from '../../utils';

/* Component Styles */
const AphCardStyled = styled.div`
    box-sizing: border-box;

    display: block;
    margin : ${props => props.margin || null};
    padding: ${props => props.padding || '10px'};

    border-radius: ${RADIUS.SM}px;

    color     : ${colors.get('black')};
    background: ${colors.get('white')};
    box-shadow: 0 0 5px ${colors.get('black', 'original', 0.25)};

    transition : box-shadow 0.25s linear, padding 0.25s linear;
    will-change: box-shadow, padding;

    &.active,
    &:hover {
        box-shadow: 0 0 20px ${colors.get('black', 'original', 0.25)};
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
    margin : undefined,
    padding: '10px',
    styles : {},
};

/* Properties Types */
Card.propTypes = {
    margin : propTypes.string,
    padding: propTypes.string,
    styles : propTypes.object,
};

/* Exporting */
export default Card;
