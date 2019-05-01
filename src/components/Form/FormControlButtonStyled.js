/* Packages */
import styled from '@emotion/styled';

/* Framework Definitions */
import { SIZES } from '../../constants';
import { colors } from '../../utils';

/* Component Styles */
const AphFormControlButtonStyled = styled.button`
    box-sizing: border-box;
    position  : absolute;
    display   : block;
    padding   : 0;
    margin    : 0;
    width     : 30px;
    height    : 30px;
    top       : 10px;
    z-index   : 10;

    font-size  : 30px;
    line-height: 30px;

    border    : 0;
    outline   : 0;
    background: transparent;

    text-align: center;

    &:active,
    &:focus,
    &:hover {
        color: ${colors.get('black')};

        border    : 0;
        outline   : 0;
        background: transparent;
    }

    ${props => (props.left ? 'left' : 'right')}: 5px;

    ${props => props.styles};
`;

/* Exporting */
export default AphFormControlButtonStyled;
