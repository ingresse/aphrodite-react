/* Packages */
import styled from '@emotion/styled';

/* Utils */
import { colors } from '../../utils';

/* Constants */
import { MEDIA_QUERIES, SIZES, ZINDEX } from '../../constants';

/* CSS Selector */
const selector = '.aph-modal';

/* Modal Styled */
const ModalStyled = styled.dialog`
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    display : none;
    opacity : 0;
    z-index : ${ZINDEX.MODAL};
    width   : auto;
    height  : auto;
    top     : 40px;
    right   : 40px;
    bottom  : 0;
    left    : 40px;
    margin  : 0;
    padding : 0 0 ${props => props.hasFooter ? SIZES.ACTION_BAR_HEIGHT : 0};

    border : 0;
    outline: 0;

    transform: translateY(${props => props.opened ? '0' : '50%'});

    will-change: z-index, opacity, transform;
    transition :
        display ${props => props.opened ? 0.2 : 0.1}s linear,
        opacity ${props => props.opened ? 0.1 : 0.2}s linear,
        transform ${props => props.opened ? 0.2 : 0.1}s linear
    ;

    color           : ${props => colors.getFromTheme(props, 'black')};
    background-color: ${props => colors.getFromTheme(props, 'white')};
    box-shadow      : 0 0 10px 0 ${props => colors.getFromTheme(props, 'shadow')};
    border-radius   : ${SIZES.LG.RADIUS} ${SIZES.LG.RADIUS} 0 0;

    &.visible {
        display: block;
    }

    &.active {
        opacity: 1;
    }

    * {
        box-sizing: border-box;
    }

    ${selector} {
        &__container {
            min-height: 100%;
            max-height: 100%;
            overflow  : auto;

            &__title {
                padding: 45px 0 15px;
            }

            &__header {
                padding-top   : 5px;
                padding-bottom: 5px;
            }

            &__content {
                width: 100%;
            }
        }

        &__footer {
            max-height: ${SIZES.ACTION_BAR_HEIGHT};
        }
    }

    ${props => props.styles};

    ${MEDIA_QUERIES.LT.SM} {
        top  : 20px;
        right: 10px;
        left : 10px;

        ${selector} {
            &__container {
                &__title {
                    padding: 25px 0 15px;
                }

                &__header {
                    padding-top: 0;
                }
            }
        }
    }
`;

/* Exporting */
export default ModalStyled;
