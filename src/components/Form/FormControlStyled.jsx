/* Packages */
import React from 'react';
import styled from '@emotion/styled';

/* Framework Definitions */
import { RADIUS, SIZES } from '../../constants';
import { colors } from '../../utils';

/**
 * Component Styled
 *
 * @param {object} properties - component props
 */
const FormControlStyled = styled.input`
    box-sizing: border-box;
    display   : block;
    width     : 100%;
    margin    : 0;
    min-height: 50px;
    padding   : ${props => props.hasLabel ? 2 : 1}0px 10px 0;

    font-weight: ${SIZES.MD.FONT_WEIGHT};
    font-size  : ${SIZES.MD.FONT_SIZE};
    line-height: ${SIZES.MD.LINE_HEIGHT};

    color           : ${props => colors.getFromTheme(props, 'base')};
    background-color: ${props => colors.getFromTheme(props, 'background')};
    border-radius   : ${RADIUS.XS}px;

    border : 0;
    outline: 0;

    transition-property       : color, padding;
    transition-timing-function: linear;
    transition-duration       : 0.15s;

    will-change: color, padding;

    -webkit-appearance         : none;
    -webkit-tap-highlight-color: transparent;

    &::placeholder {
        color: ${props => colors.getFromTheme(props, 'mercury', 'light')};

        font-weight: 300;
    }

    &:active,
    &:focus {
        color: ${props => colors.getFromTheme(props, (props.error ? 'error' : 'base'))};

        + .aph-form-label {
            top      : 0;
            font-size: ${SIZES.SM.FONT_SIZE};
            transform: translateY(0);
        }
    }

    &:hover,
    &:active,
    &:focus {
        border : 0;
        outline: 0;

        + .aph-form-label {
            color: ${props => colors.getFromTheme(props, (props.error ? 'error' : (props.color || 'secondary')))};
        }
    }

    &.disabled,
    &:disabled {
        cursor: not-allowed;

        color           : ${props => colors.getFromTheme(props, 'base')};
        background-color: ${props => colors.getFromTheme(props, 'disabled', 'crystal')};

        + .aph-form-label {
            background-color: ${props => colors.getFromTheme(props, 'disabled', 'crystal')};
        }

        &:hover,
        &:active,
        &:focus {
            + .aph-form-label {
                color: ${props => colors.getFromTheme(props, 'helper')};
            }
        }
    }

    &.aph-form-control--middle {
        padding: 10px;
    }

    ${props => !props.error ? null : `
        color: ${colors.getFromTheme(props, 'error')};

        + .aph-form-label {
            color: ${colors.getFromTheme(props, 'error')};
        }

        &:hover,
        &:active,
        &:focus {
            + .aph-form-label {
                color: ${colors.getFromTheme(props, 'error')};
            }
        }
    `}

    ${props => props.styles};
`;

/* Exporting */
export default FormControlStyled;
