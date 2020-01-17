import styled from '@emotion/styled';

export const DialogWrapper = styled.section`
    display: flex;
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    padding: ${(props) => props.padding};

    background-color: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &.act {
        opacity: 1;
        visibility: visible;
    }

    ${(props) => props.styles}
`;

export const DialogContent = styled.div`
    opacity: 0;
    transform: scale(0);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &.act {
        z-index: 2;
        opacity: 1;
        transform: scale(1);
    }
`;
