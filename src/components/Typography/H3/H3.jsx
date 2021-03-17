/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Utils */
import { text } from '../../../utils';

/* Component Styles */
const H3Styled = styled.h3`
    box-sizing: border-box;

    ${props => text(props, 'LG')};

    ${props => props.styles};
`;

/* Component Itself */
const H3 = forwardRef((props, ref) => {
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
        <H3Styled
            textAlign={align}
            textLeft={left}
            textCenter={center}
            textRight={right}
            textLower={lower}
            textUpper={upper}
            textColor={color}
            {...rest}
            ref={ref}
            className={`aph-h3 ${className || ''}`}
        />
    );
});

/* Default Properties */
H3.defaultProps = {
    fontWeight: 'normal',
    link      : false,
    bold      : false,
    center    : false,
    upper     : false,
    helper    : false,
    margin    : '15px 0 5px',
    color     : '',
    styles    : {},
};

/* Properties Types */
H3.propTypes = {
    fontWeight: propTypes.string,
    link      : propTypes.bool,
    bold      : propTypes.bool,
    center    : propTypes.bool,
    upper     : propTypes.bool,
    helper    : propTypes.bool,
    margin    : propTypes.string,
    color     : propTypes.string,
    styles    : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default H3;
