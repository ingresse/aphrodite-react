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
    z-index : 1${props => props.opened ? 0 : null};

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
                margin    : 0;
                padding   : 0;
                color     : inherit;
                background: transparent;
                z-index   : 4;
            }

            &__content {
                display  : none;
                position : absolute;
                z-index  : ${props => props.opened ? 6 : 3};
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

                color     : ${props => colors.getFromTheme(props, 'black')};
                background: ${props => colors.getFromTheme(props, 'white')};
                box-shadow: 0 2px 10px 0 ${props => colors.getFromTheme(props, 'shadow', 'crystal')};

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
            overflow: hidden;
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
