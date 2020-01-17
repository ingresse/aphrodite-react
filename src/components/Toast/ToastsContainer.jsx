/* Packages */
import React from 'react';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

/* Styles */
import 'react-toastify/dist/ReactToastify.min.css';

/* Constants */
import { COLORS, MEDIA_QUERIES, ZINDEX } from '../../constants';

/* Component */
const ToastsContainer = (props = { styles: {} }) => {
    const styles = props.styles || {};

    const AphToastsContainer = styled('div')({
        ...styles,
        zIndex  : (styles.zIndex || ZINDEX.TOAST),
        position: (styles.position || 'fixed'),
        top     : (typeof styles.top === 'string' ? styles.top : '20px'),
        right   : (typeof styles.right === 'string' ? styles.right : '20px'),

        '.Toastify__toast-container': {
            position: 'relative',
            top     : 'auto',
            right   : 'auto',
            width   : '100%',
            minWidth: '380px',
            padding : 0,
        },

        '.Toastify__toast': {
            margin      : '0 0 10px',
            padding     : '15px 40px 15px 20px',
            background  : 'rgba(255, 255, 255, 0.95)',
            boxShadow   : '0 0 4px rgba(42, 42, 42, 0.25)',
            borderRadius: '4px',
            minHeight   : '50px',
            maxWidth    : '380px',
            width       : '100%',

            fontFamily: 'inherit',
            fontWeight: '500',
            fontSize  : '16px',
            lineHeight: '20px',

            userSelect: 'none',

            '&--default': {
                color: COLORS.BLACK,
            },

            '.Toastify__close-button': {
                position: 'absolute',
                top     : 'calc(50% - 15px)',
                right   : '10px',
                width   : '30px',
                height  : '30px',
                padding : 0,
                margin  : '0 !important',
                opacity : 1,

                color : 'transparent',
                cursor: 'pointer',

                outline     : 0,
                border      : 0,
                borderRadius: '50%',
                background  : 'transparent',
                boxShadow   : 'none',

                textAlign: 'center',

                willTransform: 'background, box-shadow',
                transition   : 'background .25s linear, box-shadow .25s linear',

                '&:hover': {
                    background: 'rgba(42, 42, 42, 0.05)',
                },

                '&:active,&:focus': {
                    boxShadow : 'inset 1px 1px 4px rgba(42, 42, 42, 0.15)',
                    background: 'rgba(42, 42, 42, 0.15)',
                },

                '&:before': {
                    position: 'absolute',
                    content : '"×"',
                    width   : '100%',
                    display : 'block',
                    color   : COLORS.BLACK,

                    fontSize  : '20px',
                    lineHeight: '16px',
                    textAlign : 'center',
                },
            },

            '.Toastify__progress-bar': {
                height    : '2px',
                background: COLORS.BLACK,
            },

            '&.Toastify__toast--success': {
                color: COLORS.SUCCESS,

                '.Toastify__close-button--success:before': {
                    color: COLORS.SUCCESS,
                },

                '.Toastify__progress-bar--success': {
                    background: COLORS.SUCCESS,
                }
            },

            '&.Toastify__toast--info': {
                color: COLORS.INFO,

                '.Toastify__close-button--info:before': {
                    color: COLORS.INFO,
                },

                '.Toastify__progress-bar--info': {
                    background: COLORS.INFO,
                }
            },

            '&.Toastify__toast--warning': {
                color: COLORS.WARNING,

                '.Toastify__close-button--warning:before': {
                    color: COLORS.WARNING,
                },

                '.Toastify__progress-bar--warning': {
                    background: COLORS.WARNING,
                }
            },

            '&.Toastify__toast--error': {
                color: COLORS.ERROR,

                '.Toastify__close-button--error:before': {
                    color: COLORS.ERROR,
                },

                '.Toastify__progress-bar--error': {
                    background: COLORS.ERROR,
                }
            },

            '&.Toastify__toast--inverse': {
                color     : COLORS.WHITE,
                background: 'rgba(45, 45, 45, 0.95)',

                '.Toastify__close-button': {
                    '&:hover': {
                        background: 'rgba(42, 42, 42, 0.5)',
                    },

                    '&:active,&:focus': {
                        boxShadow : 'inset 1px 1px 4px rgb(42, 42, 42)',
                        background: 'rgba(42, 42, 42, 0.5)',
                    },

                    '&:before': {
                        color: COLORS.WHITE,
                    },
                },

                '.Toastify__progress-bar': {
                    background: COLORS.WHITE,
                }
            },
        },

        [MEDIA_QUERIES.LT.SM]: {
            width : '100%',
            top   : 'auto',
            right : 0,
            bottom: 0,
            left  : 0,

            '.Toastify__toast-container': {
                top    : 'auto',
                right  : 0,
                bottom : 0,
                left   : 0,
                padding: 0,

                width   : '100%',
                minWidth: '100%',
            },

            '.Toastify__toast': {
                margin      : 0,
                padding     : '20px 40px 20px 20px',
                boxShadow   : '0 0 2px 0 rgba(42, 42, 42, 0.2)',
                borderRadius: 0,
                maxWidth    : '100%',
            }
        },
    });

    return (
        <AphToastsContainer className="aph-toasts-container" styles={props.styles}>
            <ToastContainer
                {...props}
                closeOnClick={props.closeOnClick || false}
            />
        </AphToastsContainer>
    );
}

export default ToastsContainer;
