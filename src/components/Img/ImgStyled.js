/* Core Packages */
import styled from '@emotion/styled';

/* Base Component */
import Styled from '../Styled/Styled';

/* Constants */
import {
    MEDIA_QUERIES,
    RADIUS,
} from '../../constants';

/* Styled */
const ImgStyled = styled(Styled)((props) => {
    const {
        center,
        circle,
        rounded,
        radius,

        maxWidthXS,
        withFadeIn,

        styles,
    } = props;

    let _extraStyles = {};

    if (center) {
        _extraStyles = {
            ..._extraStyles,
            display: 'block',
            margin : '0 auto',
        };
    }

    if (maxWidthXS) {
        _extraStyles[MEDIA_QUERIES.LT.SM] = Object.assign({
                maxWidth: maxWidthXS,
            }, styles && styles[MEDIA_QUERIES.LT.SM] ? styles[MEDIA_QUERIES.LT.SM] : {}
        );
    }

    if (withFadeIn) {
        _extraStyles = {
            ..._extraStyles,
            opacity   : 1,
            transition: 'opacity 0.3s linear',

            '&.aph-img--fade-in': {
                opacity: 0,
            },
        };
    }

    return {
        boxSizing    : 'border-box',
        display      : 'inline-block',
        opacity      : 1,
        maxWidth     : '100%',
        height       : 'auto',
        verticalAlign: 'middle',

        borderRadius: (circle ? '50%' : rounded ? (RADIUS + 'px') : (radius || null)),

        ...styles,

        ..._extraStyles
    };
});

/* Exporting */
export default ImgStyled;
