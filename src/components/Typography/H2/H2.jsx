/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Commons */
import { text } from '../typography';

/* Component Styles */
const H2Styled = styled.h2`
    box-sizing: border-box;

    ${props => text(props, 'XL')};

    ${props => props.styles};
`;

/* Component Itself */
const H2 = forwardRef((props, ref) => {
    const {
        className,
        color,

        align,
        center,
        left,
        right,
        lower,
        upper,

        ...rest
    } = props;

    return (
        <H2Styled
            textAlign={align}
            textLeft={left}
            textCenter={center}
            textRight={right}
            textLower={lower}
            textUpper={upper}
            textColor={color}
            {...rest}
            ref={ref}
            className={`aph-h2 ${className || ''}`}
        />
    );
});

/* Default Properties */
H2.defaultProps = {
    link  : false,
    bold  : false,
    center: false,
    upper : false,
    helper: false,
    margin: '25px 0 15px',
    color : '',
    styles: {},
};

/* Properties Types */
H2.propTypes = {
    link  : propTypes.bool,
    bold  : propTypes.bool,
    center: propTypes.bool,
    upper : propTypes.bool,
    helper: propTypes.bool,
    margin: propTypes.string,
    color : propTypes.string,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default H2;
