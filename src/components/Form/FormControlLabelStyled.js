/* Packages */
import styled from '@emotion/styled';

/* Framework Definitions */
import { SIZES } from '../../constants';
import { colors } from '../../utils';

/* Component Styles */
const AphFormControlLabelStyled = styled.label`
    box-sizing: border-box;
    position  : absolute;
    top       : 12.5px;
    left      : 0;
    right     : 0;
    display   : inline-block;
    padding   : 2.5px 10px;
    border-radius: 5px;

    pointer-events: none;

    font-size  : ${SIZES.MD.FONT_SIZE};
    line-height: ${SIZES.MD.LINE_HEIGHT};

    color: ${props => colors.getFromTheme(props, 'helper')};

    text-transform: uppercase;

    transition-property       : top, font-size;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration       : 0.15s;

    &.aph-form-label--top {
        top      : 0;
        font-size: ${SIZES.SM.FONT_SIZE};
    }
`;

/* Exporting */
export default AphFormControlLabelStyled;
