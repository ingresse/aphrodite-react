/* Packages */
import styled from '@emotion/styled';

/* Component Itself */
const CollapsibleChildrenStyled = styled.div`
    display : block;
    opacity : 1;
    overflow: hidden;

    margin-right: -10px;
    margin-left : -10px;

    transition : max-height 0.25s linear, opacity 0.25s linear;
    will-change: max-height, opacity;

    ${props => props.styles};
`;

/* Exporting */
export default CollapsibleChildrenStyled;
