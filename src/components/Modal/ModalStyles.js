import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const fadeEnter = keyframes`
  from {
        opacity: 0;
    }
`;

const fadeLeave = keyframes`
    to {
        opacity: 0
    }
`;

const ContainerView = styled.div`
    top    : 0;
    left   : 0;
    width  : 100%;
    height : 100%;
    z-index: 1000;
`;

export const ModalContainer = styled(ContainerView)`
    position: fixed;

    &.modal-fade-enter {
        animation: ${fadeEnter} both ease-in;
    }

    &.modal-fade-leave {
        animation: ${fadeLeave} both ease-out;
    }

    h1 {
        margin-bottom: 80px;
    }
`;

export const Mask = styled(ContainerView)`
    position   : absolute;
    background : rgba(0, 0, 0, .3);
`;

export const ModalDialog = styled.div`
    position: absolute;
    top     : 40px;
    left    : 0;
    right   : 0;
    bottom  : 0;
    margin  : auto;

    padding-top     : 15px;
    border-radius   : 10px 10px 0 0;
    z-index         : 1001;
    background      : #fff;
    box-shadow      : 0 0 10px 0 rgba(0,0,0,0.25);
`;
