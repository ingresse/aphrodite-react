/* Core Packages */
import styled from '@emotion/styled';

/* Utilities */
import {
    text,
} from '../../utils';

/* Component Styles */
const AvatarStyled = styled.figure`
    box-sizing: border-box;
    position  : relative;
    display   : ${props => props.aphCenter ? '' : 'inline-'}block;
    margin    : ${props => props.aphCenter ? (props.aphMargin + ' auto') : props.aphMargin};
    width     : ${props => (props.aphWidth + ((props.aphWidth + '').includes('px') ? '' : 'px'))};
    height    : ${props => (props.aphHeight + ((props.aphHeight + '').includes('px') ? '' : 'px'))};

    border-radius   : ${props => props.aphRadius || (props.aphCircle ? '50%' : null)};
    background-color: ${props => props.aphColorStart || props.aphColorEnd};
    background      : linear-gradient(0deg, ${props => props.aphColorStart} 0%, ${props => props.aphColorEnd} 100%);

    user-select: none;

    ${props => props.aphStyles};

    .aph-avatar {
        &__initials {
            color: rgba(255, 255, 255, 0.5);

            font-size     : ${props => (props.aphFontSize || (((props.aphWidth + '').replace('px', '') / 2) - 8))}px;
            line-height   : ${props => (props.aphHeight + ((props.aphHeight + '').includes('px') ? '' : 'px'))};
            text-align    : center;
            text-transform: uppercase;
            user-select   : none;

            ${props => text(props)};
        }
    }
`;

/* Exporting */
export default AvatarStyled;
