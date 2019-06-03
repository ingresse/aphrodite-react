/* Packages */
import styled from '@emotion/styled';

/* Component Itself */
export const DropdowContainer = styled.div`
    display   : inline-block;
    position  : absolute;
    z-index   : 999;
    background: #fff;
    margin-top: 10px;

    border-radius : 5px;
    box-shadow    : 0 0 5px 0 rgba(0,0,0,0.25);
    padding-top   : 10px;
    padding-bottom: 10px;
`;

export const DropdowHeader = styled.div`
    padding: 10px 20px;
    pointer-events: none;
    color: ${props => props.headerColor};
`;

export const DropdowContent = styled.div`
    display        : flex;
    flex-direction : column;
    justify-content: center;

    .item {
        color          : ${props => props.color};
        padding        : 10px 20px;
        transition     : background 0.15s linear;
        text-decoration: none;

        &:hover {
            background: ${props => props.hover};
        }
    }
`;
