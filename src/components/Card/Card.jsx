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

    color: ${props => !props.color ? null : colors.getFromTheme(props, props.color)};
    background: ${props => !props.background ? null : colors.getFromTheme(props, props.background)};

    transition : background-color 0.2s linear, box-shadow 0.2s linear, padding 0.2s linear;
    will-change: box-shadow, padding;
    box-shadow: ${props => (!props.shadow ? null : ((typeof props.shadow === 'string') ? props.shadow : `0 0 3px ${colors.getFromTheme(props, 'shadow')}`))};

    &.active,
    &:hover {
        ${props => props.shadow && props.hoverable ? ({
            boxShadow: `0 0 20px ${colors.get('shadow')}`,
        }) : null};
    }

    &:hover {
        ${props => props.hoverable ? () => {
            const isActive = props.className.split('active').length > 1;

            if (isActive) {
                return;
            }

            return ({ backgroundColor: `${colors.get('background')}`,})
        } : null};
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
    margin   : undefined,
    padding  : '10px',
    shadow   : true,
    styles   : {},
};

/* Properties Types */
Card.propTypes = {
    margin   : propTypes.string,
    padding  : propTypes.string,
    shadow   : propTypes.bool,
    styles   : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Card;
