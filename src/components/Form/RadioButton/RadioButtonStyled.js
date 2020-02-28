import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../../utils';

export const RadioButtonWrapper = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;

    position: relative;
    padding-top: 5px;
    padding-left: 40px;
    padding-bottom: 5px;

    span {
        ${(props) => props.disabled &&
            css`
                color: ${colors.get('disabled')};
                text-decoration: line-through;
            `
        }
    }
`;

export const RadioButtonInput = styled.input`
    position: absolute;
    left: 0;

    display: none;
    width : 30px;
    height: 30px;

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
        border: 1px solid ${colors.get('mercury', 'original')};
    }

    &:checked ~ i {
        border: 1px solid ${colors.get('secondary')};

        &:before {
            content   : " ";
            position  : absolute;
            display   : block;
            width     : 14px;
            height    : 14px;

            background-color:  ${(props) => props.disabled ? colors.get('disabled') : colors.get('secondary')};
            border-radius: 100%;
        }
    }

    &:disabled ~ i {
        border: 1px solid ${colors.get('disabled')};
    }
`;
