/* Packages */
import styled from '@emotion/styled';

/* Utilities */
import { colors } from '../../utils';

/* Constants */
import { ZINDEX } from '../../constants';

/* Modal Overlay Styles */
const ModalOverlayStyled = styled.div`
    position: fixed;
    z-index : ${ZINDEX.MODAL - 1};
    top     : ${props => props.isOpened ? '0' : '100%'};
    right   : 0;
    bottom  : 0;
    left    : 0;
    opacity : ${props => props.isOpened ? '1' : '0'};

    backdrop-filter : blur(2px);
    background-color: ${colors.get('black', 'normal', 0.2)};

    will-change: opacity top;
    transition :
        opacity 0.2s linear,
        top 0.${props => props.isOpened ? 1 : 4}s linear
    ;

    ${props => props.styles};
`;

/* Exporting */
export default ModalOverlayStyled;
