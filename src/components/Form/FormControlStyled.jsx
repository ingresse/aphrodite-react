/* Packages */
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

    padding-top   : ${({ hasLabel, defaultPadding }) => hasLabel ? '20px' : defaultPadding || '10px'};
    padding-bottom: ${({ hasLabel, defaultPadding }) => hasLabel ? '0' : defaultPadding || '10px'};
    padding-right : ${({ hasAfter, defaultPadding }) => hasAfter ? '40px' : defaultPadding || '10px'};
    padding-left  : ${({ hasBefore, defaultPadding }) => hasBefore ? '40px' : defaultPadding || '10px'};

    font-weight: ${SIZES.MD.FONT_WEIGHT};
    font-size  : ${SIZES.MD.FONT_SIZE};
    line-height: ${SIZES.MD.LINE_HEIGHT};

    color           : ${props => colors.getFromTheme(props, 'base')};
    background-color: ${props => colors.getFromTheme(props, 'background')};
    border-radius   : ${RADIUS.XS}px;

    border : 0;
    outline: 0;

    transition-property       : color, padding-top, padding-bottom, padding-right;
    transition-timing-function: linear;
    transition-duration       : 0.3s;

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
    &:disabled,
    &[readonly] {
        cursor : not-allowed;

        &:hover,
        &:active,
        &:focus {
            + .aph-form-label {
                color: ${props => colors.getFromTheme(props, 'helper')};
            }
        }
    }

    &.disabled,
    &:disabled {
        opacity         : 1;
        color           : ${props => colors.getFromTheme(props, 'base')};
        background-color: ${props => colors.getFromTheme(props, 'disabled', 'crystal')};
    }

    &[readonly] {
        opacity: 0.5;
    }

    &.aph-form-control--middle {
        padding-top: ${({ defaultPadding }) => defaultPadding};
        padding-bottom: ${({ defaultPadding }) => defaultPadding};
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
