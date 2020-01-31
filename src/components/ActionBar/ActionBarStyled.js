/* Core Packages */
import styled from '@emotion/styled';

/* Utilities */
import { colors } from '../../utils';

/* Constants */
import { SIZES, ZINDEX } from '../../constants';

/* Styles */
const ActionBarStyled = styled.div`
    box-sizing: border-box;
    display   : block;
    width     : 100%;
    min-height: ${SIZES.ACTION_BAR_HEIGHT};

    z-index : ${ZINDEX.ACTION_BAR};
    position: fixed;
    right   : 0;
    bottom  : 0;
    left    : 0;
    padding : 20px 0;

    background-color: ${(props) => colors.getFromTheme(props, 'inverse')};
    box-shadow      : 0 0 4px 0 ${(props) => colors.getFromTheme(props, 'shadow')};

    transform  : translateY(110%);
    will-change: transform;
    transition : transform 0.3s ease-out 0s, background-color 0.2s linear;

    &.aph-action-bar--visible {
        transform: translateY(0);
    }

    ${(props) => props.styles};
`;

/* Exporting */
export default ActionBarStyled;
