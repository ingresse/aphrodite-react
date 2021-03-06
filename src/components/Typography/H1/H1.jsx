/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Utils */
import { text } from '../../../utils';

/* Component Styles */
const H1Styled = styled.h1`
    box-sizing: border-box;

    ${props => text(props, 'XXL')};

    ${props => props.styles};
`;

/* Component Itself */
const H1 = forwardRef((props, ref) => {
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
        <H1Styled
            textAlign={align}
            textColor={color}
            textLeft={left}
            textCenter={center}
            textRight={right}
            textLower={lower}
            textUpper={upper}
            {...rest}
            ref={ref}
            className={`aph-h1 ${className || ''}`}
        />
    );
});

/* Default Properties */
H1.defaultProps = {
    link  : false,
    bold  : true,
    center: false,
    upper : false,
    helper: false,
    margin: '25px 0 15px',
    color : '',
    styles: {},
};

/* Properties Types */
H1.propTypes = {
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
export default H1;
