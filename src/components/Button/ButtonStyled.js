import styled from '@emotion/styled';
import { colors, styling } from '../../utils';

const AphButtonStyled = styled.button`
    position  : relative;
    overflow  : hidden;
    cursor    : pointer;
    display   : ${props => props.aphblock ? '' : 'inline-'}block;

    ${props => styling(props)};

    width: ${props => props.aphblock ? '100%' : 'auto'};

    font-weight: ${({ aphweight }) => aphweight};
    font-size  : 16px;
    line-height: 20px;
    text-align  : center;
    text-decoration: none;

    border : 0;
    outline: 0;

    transition: all ease 0.25s;

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
            }
        }
    }

    ${props => props.aphstyles};
`;

/* Exporting */
export default AphButtonStyled;
