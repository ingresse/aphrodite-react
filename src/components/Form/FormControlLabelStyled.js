/* Packages */
import styled from '@emotion/styled';

/* Framework Definitions */
import { SIZES } from '../../constants';
import { colors } from '../../utils';

/* Component Styles */
const AphFormControlLabelStyled = styled.label`
    box-sizing: border-box;
    position  : absolute;
    top       : ${props => props.textArea ? '15px' : '50%'};
    left      : 10px;
    display   : inline-block;

    pointer-events: none;

    color: ${props => colors.getFromTheme(props, 'helper')};

    font-size  : ${SIZES.MD.FONT_SIZE};
    line-height: ${SIZES.MD.LINE_HEIGHT};

    text-transform: uppercase;

    transform: ${props => props.textArea ? null : 'translateY(-50%)'};

    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration       : 0.15s;

    &.aph-form-label--top {
        top      : 2.5px;
        font-size: ${SIZES.SM.FONT_SIZE};
        transform: translateY(0);
    }
`;

/* Exporting */
export default AphFormControlLabelStyled;
