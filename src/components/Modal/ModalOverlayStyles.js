/* Packages */
import styled from '@emotion/styled';

/* Constants */
import { ZINDEX } from '../../constants';

/* Modal Overlay Styles */
const ModalOverlayStyled = styled.div`
    position: fixed;
    z-index : ${ZINDEX.MODAL - 1};
    top     : 0;
    right   : 0;
    bottom  : 0;
    left    : 0;
    
    ${props => props.styles};
`;

/* Exporting */
export default ModalOverlayStyled;
