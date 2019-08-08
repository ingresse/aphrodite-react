/* Packages */
import styled from '@emotion/styled';

/* Utils */
import { colors } from '../../utils';

/* Constants */
import { GRID, MEDIA_QUERIES, SIZES, ZINDEX } from '../../constants';

/* CSS Selector */
const selector = '.aph-modal';

/* Modal Styled */
const ModalStyled = styled.dialog`
    box-sizing: border-box;
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

    transform: translateY(${props => props.opened ? '0' : '110%'});

    will-change: z-index, opacity, transform;
    transition :
        display ${props => props.opened ? 0.45 : 0.3}s linear,
        opacity ${props => props.opened ? 0.35 : 0.45}s linear,
        transform ${props => props.opened ? 0.35 : 0.45}s linear
    ;

    background-color: ${colors.get('white')};
    box-shadow      : 0 0 10px 0 ${colors.get('black', 'original', 0.25)};
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
            max-height: 100%;
            overflow  : auto;

            &__title {
                padding-top: 10px;
            }

            &__header {
                padding-top   : 5px;
                padding-bottom: 5px;
            }
        }

        &__footer {
            max-height: ${SIZES.ACTION_BAR_HEIGHT};
        }
    }

    ${props => props.styles};

    ${MEDIA_QUERIES.LT.SM} {
        padding: ${(GRID.CONTAINER_PADDING_XS + GRID.UNIT)} 0;
        right  : 0;
        left   : 0;

        ${selector} {
            &__container {
                &__title,
                &__header {
                    padding-top: 0;
                }

                &__title {
                    margin: 15px 0;
                }
            }
        }
    }
`;

/* Exporting */
export default ModalStyled;
