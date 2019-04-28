/* Packages */
import styled from '@emotion/styled';

/* Framework Definitions */
import { SIZES } from '../../constants';
import { colors } from '../../utils';

/* Component Styles */
const AphInputLabelStyled = styled.label`
    box-sizing: border-box;
    position  : absolute;
    top       : 15px;
    left      : 10px;
    display   : inline-block;

    color: ${colors.get('mercury')};

    font-size  : ${SIZES.MD.FONT_SIZE};
    line-height: ${SIZES.MD.LINE_HEIGHT};

    text-transform: uppercase;

    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration       : 0.15s;

    &.aph-form-label--top {
        top      : 2.5px;
        font-size: ${SIZES.SM.FONT_SIZE};
    }
`;

/* Exporting */
export default AphInputLabelStyled;
