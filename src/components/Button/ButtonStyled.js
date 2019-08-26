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
    display   : ${props => props.aphblock ? '' : 'inline-'}block;

    width    : ${props => props.aphblock ? '100%' : 'auto'};
    min-width: 140px;
    padding  : ${props => ((props.aphsm || props.aphsmall) ? '5px 15px' : '10px 20px')};
    margin   : ${props => props.aphmargin};

    text-align    : center;
    text-transform: uppercase;

    font-size  : 16px;
    line-height: 20px;

    border-radius: ${props => ((props.aphradius || 25) + ((props.aphradius + '').includes('px') ? '' : 'px'))};

    border : 0;
    outline: 0;

    -webkit-tap-highlight-color: ${props => colors.getFromTheme(props, (props.aphcolor || 'secondary'), 'crystal', 0.5)};

    color: ${props =>
        props.aphlink ?
            colors.getFromTheme(props, (props.aphcolor || 'secondary')) :
            colors.getFromTheme(props, (['white', 'smoke'].includes(props.aphcolor)) ? 'secondary' : 'white')
    };
    background-color: ${props =>
        props.aphlink ?
            'transparent' :
            colors.getFromTheme(props, (props.aphcolor || 'secondary'))
    };

    transition-timing-function: ease;
    transition-duration       : 0.25s;
    transition-property       : background-color, color, width;

    &:hover {
        background-color: ${props =>
            props.aphlink ?
                colors.getFromTheme(props, 'smoke') :
                colors.getFromTheme(props, (props.aphcolor || 'secondary'), 'light')
        };
    }

    &:active,
    &:focus {
        background-color: ${props =>
            props.aphlink ?
                colors.getFromTheme(props, 'smoke') :
                colors.getFromTheme(props, (props.aphcolor || 'secondary'), 'dark')
        };
    }

    &:disabled {
        cursor: not-allowed;

        color: ${props => colors.getFromTheme(props,
            'mercury',
            (props.aphtranslucid ? 'crystal' : 'light')
        )};

        background-color: ${props =>
            props.aphlink ?
                colors.getFromTheme(props, 'smoke') :
                    props.aphtranslucid ?
                        colors.getFromTheme(props, 'smoke', '', 0.5) :
                            colors.getFromTheme(props, 'mercury', 'crystal')
        };
    }

    .aph-btn {
        &__content {
            opacity: 1;
        }

        &__loader {
            position : absolute;
            top      : calc(50% - 15px);
            left     : 50%;
            transform: translate(-50%);
            opacity  : 0;
        }
    }

    &.aph-btn--loading {
        &:hover,
        &:disabled {
            background-color: ${props =>
                props.aphlink ?
                    'transparent' :
                    colors.getFromTheme(props, (props.aphcolor || 'secondary'))
            };
        }

        .aph-btn {
            &__content {
                opacity: 0;
            }

            &__loader {
                opacity: 1;

                .aph-icon-wrapper {
                    ${animations.spin('4s')};
                }
            }
        }
    }

    ${props => props.aphstyles};
`;

/* Exporting */
export default AphButtonStyled;
