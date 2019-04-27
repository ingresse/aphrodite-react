/* Packages */
import styled from '@emotion/styled';

/* Component Itself */
const AphCollapsibleChildrenStyled = styled.div`
    display : block;
    opacity : 1;
    overflow: hidden;
    position: relative;

    margin-right: -10px;
    margin-left : -10px;

    transition-timing-function: linear;
    transition-property       : max-height, opacity;

    will-change: max-height, opacity;

    ${props => props.styles};
`;

/* Exporting */
export default AphCollapsibleChildrenStyled;
