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
    left      : 0;
    right     : 0;
    display   : block;
    padding   : 2.5px 10px;
    border-radius: 5px;

    pointer-events: none;

    color: ${props => colors.getFromTheme(props, 'helper')};
    background-color: ${props => colors.getFromTheme(props, 'background')};

    font-size  : ${SIZES.MD.FONT_SIZE};
    line-height: ${SIZES.MD.LINE_HEIGHT};

    text-transform: uppercase;

    transform: ${props => props.textArea ? null : 'translateY(-50%)'};

    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration       : 0.15s;

    &.aph-form-label--top {
        top      : 0;
        font-size: ${SIZES.SM.FONT_SIZE};
        transform: translateY(0);
    }
`;

/* Exporting */
export default AphFormControlLabelStyled;
