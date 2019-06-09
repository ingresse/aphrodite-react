/* Core Packages */
import styled from '@emotion/styled';

/* UI Library definitions */
import { colors } from '../../utils';

/* Component Itself */
const AphButtonItemStyled = styled.span`
    box-sizing: border-box;
    position  : relative;
    display   : inline-block;
    top       : 0;

    min-width: ${props => props.childrenWidth || null};
    margin   : 0;
    padding  : 0;

    text-align: center;

    transition-timing-function: linear;
    transition-duration       : 0.25s;
    transition-property       : opacity;
`;

/* Exporting */
export default AphButtonItemStyled;
