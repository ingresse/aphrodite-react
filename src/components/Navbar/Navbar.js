/* Core Packages */
import styled from '@emotion/styled';

/* Constants */
import { ZINDEX } from '../../constants';

/* Utilities */
import { colors } from '../../utils';

/* Component Styles */
const NavbarStyled = styled.nav`
    box-sizing: border-box;

    z-index : ${ZINDEX.NAVBAR};
    display : block;
    position: ${props => props.position || 'static'};
    top     : ${props => props.bottom ? null : 0};
    right   : 0;
    left    : 0;
    bottom  : ${props => !props.bottom ? null : 0};

    min-height: ${props => props.bottom ? 6 : 8}0px;

    padding: 0;

    color           : ${props => colors.getFromTheme(props, 'inverse')};
    background-color: ${props => colors.getFromTheme(props, props.background)};
`;

/* Exporting */
export default NavbarStyled;
