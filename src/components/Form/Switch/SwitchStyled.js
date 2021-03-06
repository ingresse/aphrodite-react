/* Packages */
import styled from '@emotion/styled';

/* Framework Definitions */
import { SIZES } from '../../../constants';
import { colors } from '../../../utils';

const aphFormSwitchCommonStyles = `
    box-sizing: border-box;
    cursor    : pointer;
`;

/* Component Wrapper Styles */
const AphFormSwitchWrapper = styled.label`
    ${aphFormSwitchCommonStyles};

    position: relative;
    display : flex;

    min-width : 50px;
    min-height: 30px;

    -webkit-box-align: center;
    -ms-flex-align   : center;
    align-items      : center;

    font-size : ${props => props.textSmall ? (SIZES.SM.FONT_SIZE) : null};
    text-align: ${props => props.textAlign || 'left'};

    ${(props => (props.toggleAlign !== 'right') ? {
        paddingLeft: '50px',

        '.aph-form-switch__wrapper': {
            left: 0,
        },
    } : {
        paddingRight: '50px',

        '.aph-form-switch__wrapper': {
            right: 0,
        },
    })};

    ${props => props.styles};
`;

/* Component Toggle Wrapper Styles */
const AphFormSwitchToggleWrapper = styled.label`
    ${aphFormSwitchCommonStyles};

    position : absolute;
    display  : block;
    top      : 50%;
    transform: translateY(-50%);

    line-height: 0;
`;

/* Component Toggle Styles */
const AphFormSwitchToggle = styled.label`
    ${aphFormSwitchCommonStyles};

    position: absolute;
    top     : 0;

    width : 30px;
    height: 30px;

    transition-property       : right, left, box-shadow;
    transition-duration       : 0.25s;
    transition-timing-function: ease;

    border-radius   : 50%;
    box-shadow      : 0 0 5px 0 ${colors.get('black', 'original', 0.25)};
    background-color: ${props => colors.getFromTheme(props, 'white')};
`;

/* Component Input Styles */
const AphFormSwitchInput = styled.input`
    ${aphFormSwitchCommonStyles};

    padding: 0;
    margin : 5px 0;

    width        : 50px;
    height       : 20px;
    border-radius: 15px;

    background-color: ${props => colors.getFromTheme(props, 'mercury', 'light')};

    border : 0;
    outline: 0;

    transition-property       : background-color;
    transition-duration       : 0.25s;
    transition-timing-function: ease;

    -webkit-appearance         : none;
    -webkit-tap-highlight-color: transparent;

    &:active, &:focus, &:hover {
        + .aph-form-switch__toggle {
            box-shadow: 0 0 10px 0 ${colors.get('black', 'original', 0.25)};
        }
    }

    &.disabled,
    &:disabled {
        background-color: ${props=> colors.getFromTheme(props, 'disabled')};
    }

    &:checked {
        background-color: ${props => colors.getFromTheme(props, (props.color || 'success'))};

        + .aph-form-switch {
            &__toggle {
                left: 20px;
            }
        }

        &:disabled {
            background-color: ${props => colors.getFromTheme(props, (props.color || 'success'), 'light', 0.5)};
        }
    }

    + .aph-form-switch {
        &__toggle {
            left: 0;
        }
    }
`;

/* Component Content Styles */
const AphFormSwitchContent = styled.label`
    ${aphFormSwitchCommonStyles};

    display: block;
    width  : 100%;

    word-break: break-word;

    ${props => (!props.hasChildren) ? null : ((props.toggleAlign !== 'right') ? {
        paddingLeft: '10px',
    } : {
        paddingRight: '10px',
    })};
`;

/* Component Styles */
const SwitchStyled = {
    Wrapper      : AphFormSwitchWrapper,
    ToggleWrapper: AphFormSwitchToggleWrapper,
    Toggle       : AphFormSwitchToggle,
    Input        : AphFormSwitchInput,
    Content      : AphFormSwitchContent,
};

/* Exporting */
export default SwitchStyled;
