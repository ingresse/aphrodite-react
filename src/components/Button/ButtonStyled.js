/* Core Packages */
import styled from '@emotion/styled';

/* UI Library definitions */
import { animations, colors } from '../../utils';

/* Component Itself */
const AphButtonStyled = styled.button`
    box-sizing: border-box;
    position  : relative;
    overflow  : hidden;

    cursor    : pointer;
    display   : ${props => props.block ? '' : 'inline-'}block;

    width    : ${props => props.block ? '100%' : 'auto'};
    min-width: 140px;
    padding  : ${props => ((props.sm || props.small) ? '5px 15px' : '10px 20px')};
    margin   : ${props => props.margin};

    text-align    : center;
    text-transform: uppercase;

    font-size  : 16px;
    line-height: 20px;

    border-radius: ${props => ((props.radius || 25) + ((props.radius + '').includes('px') ? '' : 'px'))};

    border : 0;
    outline: 0;

    -webkit-tap-highlight-color: ${props => colors.get((props.color || 'secondary'), 'crystal', 0.5)};

    color: ${props =>
        props.link ?
            colors.get((props.color || 'secondary')) :
            colors.get((['white', 'smoke'].includes(props.color)) ? 'secondary' : 'white')
    };
    background-color: ${props =>
        props.link ?
            'transparent' :
            colors.get((props.color || 'secondary'))
    };

    transition-timing-function: ease;
    transition-duration       : 0.25s;
    transition-property       : background-color, color, width;

    &:hover {
        background-color: ${props =>
            props.link ?
                colors.get('smoke') :
                colors.get((props.color || 'secondary'), 'light')
        };
    }

    &:active,
    &:focus {
        background-color: ${props =>
            props.link ?
                colors.get('smoke') :
                colors.get((props.color || 'secondary'), 'dark')
        };
    }

    &:disabled {
        cursor: not-allowed;

        color: ${colors.get('mercury', 'light')};
        background-color: ${colors.get('mercury', 'crystal')};
    }

    .aph-btn {
        &__content {
            opacity: 1;
        }

        &__loader {
            position : absolute;
            top      : calc(50% - 11.5px);
            left     : 50%;
            transform: translate(-50%);
            opacity  : 0;
        }
    }

    &.aph-btn--loading {
        &:hover,
        &:disabled {
            background-color: ${props =>
                props.link ?
                    'transparent' :
                    colors.get((props.color || 'secondary'))
            };
        }

        .aph-btn {
            &__content {
                opacity: 0;
            }

            &__loader {
                opacity: 1;

                .aph-icon-wrapper {
                    ${animations.spin()};
                }
            }
        }
    }

    ${props => props.styles};
`;

/* Exporting */
export default AphButtonStyled;
