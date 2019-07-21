/* Packages */
import styled from '@emotion/styled';

/* Utils */
import { colors } from '../../utils';

/* Constants */
import { GRID, MEDIA_QUERIES, SIZES } from '../../constants';

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
    padding : ${(GRID.CONTAINER_PADDING + GRID.UNIT)};

    border : 0;
    outline: 0;

    transform: translateY(${props => props.opened ? '0' : '110%'});

    will-change: z-index, opacity, transform;
    transition :
        display ${props => props.opened ? 0.25 : 0.1}s linear,
        opacity ${props => props.opened ? 0.15 : 0.25}s linear,
        transform ${props => props.opened ? 0.15 : 0.25}s linear
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

    ${props => props.styles};
`;

/* Exporting */
export default ModalStyled;
