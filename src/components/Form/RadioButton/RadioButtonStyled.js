import styled from '@emotion/styled';
import { colors } from '../../../utils';

export const RadioButtonWrapper = styled.label`
    display    : ${({ hasChildren }) => hasChildren ? 'flex' : 'block'};
    align-items: center;
    cursor     : pointer;

    position      : relative;
    padding-top   : ${({ hasChildren }) => hasChildren ? 5 : 0}px;
    padding-left  : 40px;
    padding-bottom: ${({ hasChildren }) => hasChildren ? 5 : 0}px;
`;

export const RadioButtonInput = styled.input`
    position: absolute;
    left    : 0;
    margin  : 0;
    padding : 0;
    opacity : 0;
    width   : 30px;
    height  : 30px;

    ~ i {
        position: absolute;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;

        left: 0;
        width : 30px;
        height: 30px;

        border-radius: 100%;
        border: 2px solid ${(props) => colors.getFromTheme(props, 'border')};
        transition: all ease 0.2s;

        ~ span {
            color: inherit;
            transition: all ease 0.2s;
        }
    }

    &:active, &:focus, &:hover {
        &:not(:disabled) {
            ~ i {
                border-color: ${(props) => colors.getFromTheme(props, 'secondary')};

                ~ span {
                    color: ${(props) => colors.getFromTheme(props, 'secondary')};
                }
            }
        }
    }

    &:checked ~ i {
        border-color: ${(props) => colors.getFromTheme(props, 'secondary')};

        &:before {
            content   : " ";
            position  : absolute;
            display   : block;
            width     : 14px;
            height    : 14px;

            background-color:  ${(props) => props.disabled ? colors.getFromTheme(props, 'disabled') : colors.getFromTheme(props, 'secondary')};
            border-radius: 100%;
        }
    }

    &:disabled ~ i {
        border-color: ${(props) => colors.getFromTheme(props, 'disabled')};

        ~ span {
            color: ${(props) => colors.getFromTheme(props, 'disabled')};
            text-decoration: line-through;
        }
    }
`;
