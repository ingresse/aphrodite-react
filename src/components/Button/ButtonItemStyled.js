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

    width    : 100%;
    min-width: ${props => props.childrenWidth || null};
    padding  : 0;
    margin   : 0;

    text-align: center;

    transition-timing-function: linear;
    transition-duration       : 0.25s;
    transition-property       : position, transform;
`;

/* Exporting */
export default AphButtonItemStyled;
