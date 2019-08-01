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
    padding   : 20px 10px 0;

    font-size  : ${SIZES.MD.FONT_SIZE};
    line-height: ${SIZES.MD.LINE_HEIGHT};

    color           : ${colors.get('black')};
    background-color: ${colors.get('smoke')};
    border-radius   : ${RADIUS.XS}px;

    border : 0;
    outline: 0;

    transition-property       : background-color, padding;
    transition-timing-function: linear;
    transition-duration       : 0.15s;

    will-change: background-color, padding;

    -webkit-appearance         : none;
    -webkit-tap-highlight-color: transparent;

    &::placeholder {
        color: ${colors.get('mercury', 'light')};
    }

    &:active,
    &:focus {
        background-color: ${props => colors.get(props.error ? 'error' : (props.color || 'secondary'), 'crystal')};

        + .aph-form-label {
            top      : 2.5px;
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
            color: ${props => colors.get(props.error ? 'error' : (props.color || 'secondary'))};
        }
    }

    &.disabled,
    &:disabled {
        cursor: not-allowed;

        color           : ${colors.get('mercury')};
        background-color: ${colors.get('mercury', 'crystal')};

        &:hover,
        &:active,
        &:focus {
            + .aph-form-label {
                color: ${colors.get('mercury')};
            }
        }
    }

    &.aph-form-control--middle {
        padding: 10px;
    }

    ${props => !props.error ? null : `
        color: ${colors.get('error')};

        + .aph-form-label {
            color: ${colors.get('error')};
        }

        &:hover,
        &:active,
        &:focus {
            + .aph-form-label {
                color: ${colors.get('error')};
            }
        }
    `}

    ${props => props.styles};
`;

/* Exporting */
export default FormControlStyled;
