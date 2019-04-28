/* Packages */
import styled from '@emotion/styled';

/* Framework Definitions */
import { SIZES } from '../../constants';
import { colors } from '../../utils';

/* Component Styles */
const AphInputErrorMsgStyled = styled.label`
    box-sizing: border-box;
    display   : block;
    padding   : 0 10px;
    max-height: 0;

    color: ${colors.get('error')};

    font-size  : ${SIZES.SM.FONT_SIZE};
    line-height: ${SIZES.SM.LINE_HEIGHT};

    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration       : 0.15s;
    transition-property       : max-height;

    ${props => props.styles};
`;

/* Exporting */
export default AphInputErrorMsgStyled;
