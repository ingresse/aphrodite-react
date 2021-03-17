import styled from '@emotion/styled';
import Styled from '../Styled/Styled';

const AphCollapsibleChildrenStyled = styled(Styled)`
    opacity : 1;
    overflow: hidden;
    position: relative;

    transition-timing-function: ease;
    transition-property       : max-height, opacity;

    will-change: max-height, opacity;

    ${({ styles}) => styles};
`;

export default AphCollapsibleChildrenStyled;
