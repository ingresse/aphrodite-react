/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { RADIUS } from '../../constants';
import { colors } from '../../utils';

/* Component Itself */
const SegmentStyled = styled.div`
    box-sizing: border-box;
    display: block;

    color  : ${props => props.color   || null};
    margin : ${props => props.margin  || null};
    padding: ${props => props.padding || '20px 10px'};

    ${props => !props.hoverable ? null : `
        outline: 0;
        border : 0;

        border-radius: ${RADIUS.LG}px;
        box-shadow   : none;
        transition   : box-shadow 0.15s linear;

        &:hover,
        &:focus {
            box-shadow: 0 0 10px ${colors.get('oil', 'dark', 0.25)};
        }
    `}

    ${props => props.styles};
`;

/* Component Itself */
const Segment = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <SegmentStyled
            {...props}
            ref={ref}
            className={`aph-segment ${className || ''}`}
        />
    );
});

/* Properties Types */
Segment.propTypes = {
    margin : propTypes.string,
    padding: propTypes.string,
    styles : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Segment;
