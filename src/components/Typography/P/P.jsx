/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Utils */
import { text } from '../../../utils';

/* Component Styles */
const PStyled = styled.p`
    box-sizing: border-box;

    ${props => text(props, props.textSmall ? 'SM' : 'MD')};

    ${props => props.styles};
`;

/* Component Itself */
const P = forwardRef((props, ref) => {
    const {
        className,
        color,

        align,
        center,
        left,
        right,
        lower,
        upper,
        small,

        ...rest
    } = props;

    return (
        <PStyled
            textAlign={align}
            textLeft={left}
            textCenter={center}
            textRight={right}
            textLower={lower}
            textUpper={upper}
            textColor={color}
            textSmall={small}
            {...rest}
            ref={ref}
            className={`aph-p ${className || ''}`}
        />
    );
});

/* Default Properties */
P.defaultProps = {
    link  : false,
    bold  : false,
    center: false,
    upper : false,
    small : false,
    helper: false,
    margin: '10px 0',
    color : '',
    styles: {},
};

/* Properties Types */
P.propTypes = {
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
export default P;
