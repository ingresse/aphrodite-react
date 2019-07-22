/* Packages */
import styled from '@emotion/styled';

/* Utils */
import { colors } from '../../utils';

/* Constants */
import { GRID, MEDIA_QUERIES, SIZES } from '../../constants';

/* CSS Selector */
const selector = '.aph-modal';

/* Modal Styled */
const ModalStyled = styled.dialog`
    position: fixed;
    display : none;
    opacity : 0;
    z-index : 1001;
    width   : auto;
    height  : auto;
    top     : 40px;
    right   : 40px;
    bottom  : 0;
    left    : 40px;
    margin  : 0;
    padding :
        ${(GRID.CONTAINER_PADDING + GRID.UNIT)}
        0
        ${props => props.hasFooter ? SIZES.ACTION_BAR_HEIGHT : 0}
    ;

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

    ${selector} {
        &__title {
            margin: 20px 0 15px;
        }
    }

    ${props => props.styles};

    ${MEDIA_QUERIES.LT.SM} {
        padding: ${(GRID.CONTAINER_PADDING_XS + GRID.UNIT)} 0;
        right  : 0;
        left   : 0;

        ${selector} {
            &__title {
                margin: 15px 0;
            }
        }
    }
`;

/* Exporting */
export default ModalStyled;
