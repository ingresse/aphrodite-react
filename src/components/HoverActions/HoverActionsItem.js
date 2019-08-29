/* Core Packages */
import styled from '@emotion/styled';

/* Constants */
import { RADIUS, SIZES } from '../../constants';

/* Utilities */
import { colors } from '../../utils';

/* Sizes */
const { FONT_SIZE, LINE_HEIGHT } = SIZES.XS;

/* Component Styles */
const HoverActionItem = styled.button`
    box-sizing: border-box;

    display: inline-block;
    padding: 5px;
    margin : 0;

    font-weight   : bold;
    font-size     : ${FONT_SIZE};
    line-height   : ${LINE_HEIGHT};
    text-transform: uppercase;

    border : 0;
    outline: 0;

    text-decoration: none;

    border-radius: ${RADIUS.XS}px;

    cursor: pointer;

    color           : ${props => props.color ? colors.getFromTheme(props, props.color) : 'inherit'};
    background-color: ${props => colors.getFromTheme(props, 'inverse', null, 0.75)};
    box-shadow      : 0 0 5px ${props => colors.getFromTheme(props, 'shadow')};

    transition:
        color 0.25s linear,
        background-color 0.25s linear
    ;

    &:active,
    &:focus,
    &:hover {
        border : 0;
        outline: 0;
        background-color: ${props => colors.getFromTheme(props, 'inverse', null, 1)};
    }

    &.success {
        color: ${props => colors.getFromTheme(props, 'success')};
    }

    &.error {
        color: ${props => colors.getFromTheme(props, 'error')};
    }

    ${props => props.styles};
`;

/* Exporting */
export default HoverActionItem;
