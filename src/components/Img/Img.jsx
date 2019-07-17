/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Constants */
import { MEDIA_QUERIES, RADIUS } from '../../constants';

/* Styled */
const ImgStyled = styled('img')((props) => {
    const {
        circle,
        rounded,
        radius,

        maxWidthXS,

        styles,
    } = props;

    let _extraStyles = {};

    if (maxWidthXS) {
        _extraStyles[MEDIA_QUERIES.LT.SM] = Object.assign({
                maxWidth: maxWidthXS,
            }, styles && styles[MEDIA_QUERIES.LT.SM] ? styles[MEDIA_QUERIES.LT.SM] : {}
        );
    }

    return {
        boxSizing    : 'border-box',
        display      : 'inline-block',
        maxWidth     : '100%',
        height       : 'auto',
        verticalAlign: 'middle',

        borderRadius: (circle ? '50%' : rounded ? (RADIUS + 'px') : (radius || null)),

        ...styles,

        ..._extraStyles
    };
});

/* Component */
const Img = forwardRef((props, ref) => {
    const { className } = props;

    return (
        <ImgStyled
            {...props}
            ref={ref}
            className={`aph-img ${className || ''}`}
        />
    );
});

/* Default Properties */
Img.defaultProps = {
    circle    : false,
    rounded   : false,

    radius    : '',
    maxWidthXS: '',

    styles    : {},
};

/* Properties Types */
Img.propTypes = {
    circle    : propTypes.bool,
    rounded   : propTypes.bool,

    radius    : propTypes.string,
    maxWidthXS: propTypes.string,

    styles    : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Img;
