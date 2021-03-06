/* Core Packages */
import styled from '@emotion/styled';

/* Utilities */
import { colors } from '../../utils';

/* Component Styles */
const CountdownStyled = styled.div`
    box-sizing: border-box;
    position  : relative;
    display   : block;
    margin    : 0 auto;
    width     : ${props => props.aphSize}px;
    height    : ${props => props.aphSize}px;

    .${props => props.aphSelector} {
        box-sizing: border-box;
        position  : relative;

        transform: rotate(-90deg) scaleY(-1);

        &__trace,
        &__line {
            fill: none;
        }

        &__trace {
            stroke: ${props => (colors[props.aphBackground] ?
                colors.getFromTheme(props, props.aphBackground) : props.aphBackground
            )};
        }

        &__line {
            transition: stroke-dashoffset 0.1s linear;
            stroke-linecap: round;
            stroke: ${props => (colors[props.aphColor] ?
                colors.getFromTheme(props, props.aphColor) : props.aphColor
            )};
        }

        &__count {
            position: absolute;
            top     : 0;
            right   : 0;
            bottom  : 0;
            left    : 0;
            margin  : 0;
            display : block;

            text-align : center;
            font-weight: normal;
            font-size  : ${props => props.aphSize / 2}px;
            line-height: ${props => props.aphSize}px;

            color: ${props => (colors[props.aphColor] ?
                colors.getFromTheme(props, props.aphColor) : props.aphColor
            )};
        }
    }

    ${props => props.aphStyles};
`;

/* Exporting */
export default CountdownStyled;
