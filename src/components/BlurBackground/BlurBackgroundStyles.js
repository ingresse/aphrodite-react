/* Core Packages */
import styled from '@emotion/styled';

/* Utilities */
import {
    colors,
} from '../../utils';

/* Wrapper Styles */
export const BlurBackgroundWrapper = styled.div`
    position  : relative;
    z-index   : 1;
    display   : block;
    min-width : 100%;
    min-height: 100%;
    overflow  : hidden;

    color           : ${props => colors.getFromTheme(props, 'inverse')};
    background-color: ${props => colors.getFromTheme(props, 'base', 'original', 0.5)};

    .aph-placeholder {
        background: linear-gradient(
            90deg,
            ${props => colors.getFromTheme(props, 'base', 'original', 0.05)},
            ${props => colors.getFromTheme(props, 'base', 'original', 0.25)}
        );
    }

    ${({ aphWrapperStyles }) => aphWrapperStyles};
`;

/* Image Blurred Styles */
export const BlurBackgroundImage = styled.div`
    position  : absolute;
    z-index   : -1;
    top       : 0;
    right     : 0;
    bottom    : 0;
    left      : 0;
    min-width : 100%;
    min-height: 100%;

    opacity  : ${props => props.aphOpacity};
    filter   : blur(${props => props.aphBlur});
    transform: scale(1.2);

    background-size    : cover;
    background-repeat  : no-repeat;
    background-position: 50%;
    background-image   : url(${props => props.aphImage || null});

    ${({ aphStyles }) => aphStyles};
`;
