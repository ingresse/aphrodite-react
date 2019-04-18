/* Packages */
import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Component Itself */
const SegmentStyled = styled.div`
    display: block;
    margin : ${props => props.margin || null};
    padding: ${props => props.padding || '20px 10px'};

    ${props => props.styles};
`;

/* Component Itself */
const Segment = (props) => {
    const { className } = props;

    return (
        <SegmentStyled
            {...props}
            className={`aph-segment ${className || ''}`}
        />
    );
};

/* Properties Types */
Segment.propTypes = {
    margin : propTypes.string,
    padding: propTypes.string,
    styles : propTypes.obj,
};

/* Exporting */
export default Segment;
