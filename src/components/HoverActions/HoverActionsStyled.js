/* Core Packages */
import styled from '@emotion/styled';

/* Component Selector */
const selector = '.aph-hover-actions';

/* Component Styles */
const HoverActionsStyled = styled.span`
    box-sizing: border-box;

    position: relative;
    display : inline-block;
    z-index : 1;

    ${selector} {
        &__content {
            z-index: 1;
            filter : none;
            display: block;

            transition: filter 0.15s linear;
        }

        &__items {
            position: absolute;
            top     : 0;
            right   : 0;
            bottom  : 0;
            left    : 0;
            opacity : 0;
            display : flex;
            z-index : -1;

            justify-content: space-evenly;
            align-items: center;

            transition:
                opacity 0.25s linear,
                z-index 0.25s linear
            ;

            text-align: center;

            vertical-align: middle;
        }
    }

    ${props => !props.hasActions ? null : `
        &:hover,
        &:active,
        &:focus {
            ${selector} {
                &__content {
                    filter: blur(1px);
                }

                &__items {
                    opacity: 1;
                    z-index: 10;
                }
            }
        }
    `};

    ${props => props.styles};
`;

/* Exporting */
export default HoverActionsStyled;
