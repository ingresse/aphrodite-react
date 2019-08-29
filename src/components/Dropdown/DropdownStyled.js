/* Core Packages */
import styled from '@emotion/styled';

/* UI Library Definitions */
import { colors } from '../../utils';
import { RADIUS } from '../../constants';

/* Component Styles Helpers */
const DISTANCE = 'calc(100% + 10px)';

/* Component Styles */
const DropdownStyled = styled.div`
    box-sizing: border-box;

    position: relative;
    display : block;
    width   : 100%;
    z-index : 901;

    -webkit-box-orient   : vertical;
    -webkit-box-direction: normal;

    .aph {
        &-dropdown {
            &__toggle,
            &__content {
                box-sizing: border-box;
            }

            &__toggle {
                display   : ${props => (props.toggleBlock ? '' : 'inline-')}block;
                width     : ${props => (props.toggleBlock ? '100%' : null)};
                cursor    : pointer;
                border    : 0;
                outline   : 0;
                color     : inherit;
                background: transparent;
            }

            &__content {
                display  : none;
                position : absolute;
                top      : ${props => (props.up ? null : DISTANCE)};
                bottom   : ${props => (props.up ? DISTANCE : null)};
                left     : ${props => (props.center ? '50%' : props.right ? null : '0')};
                right    : ${props => ((props.right && !props.center) ? '0' : null)};

                transform: ${props => (props.center ? 'translateX(-50%)' : null)};

                opacity: 0;
                width  : ${props => (props.contentWidth || null)};

                will-change: z-index, opacity;
                transition :
                    display ${props => props.opened ? 0.25 : 0.1}s linear,
                    opacity ${props => props.opened ? 0.15 : 0.25}s linear
                ;

                color     : ${props => colors.getFromTheme(props, 'base')};
                background: ${props => colors.getFromTheme(props, 'inverse')};
                box-shadow: 0 0 5px ${props => colors.getFromTheme(props, 'shadow')};

                padding: ${props => (props.thin ? '0' : '15px 10px')};
                border-radius: ${RADIUS.XS}px;

                text-align: ${props => (props.right) ? 'left' : null};

                align-self: center;
                overflow  : hidden;

                &.visible {
                    display: block;
                }

                &.active {
                    opacity: 1;
                }
            }
        }

        &-list {
            &__item {
                padding-right: 20px;
                padding-left : 20px;
            }
        }
    }

    &.up {
        .aph-dropdown {
            &__content {
                top   : auto;
                bottom: 100%;
            }
        }
    }

    ${props => props.styles};
`;

/* Exporting */
export default DropdownStyled;
