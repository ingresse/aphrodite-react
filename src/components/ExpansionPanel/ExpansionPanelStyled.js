import styled from '@emotion/styled';
import { colors } from '../../utils';

export const ExpansionPanelWrapper = styled.div`
    position: relative;
    box-shadow: inset 0 -1px 0 0 ${colors.get('mercury', 'crystal')};
    ${props => props.styles};
`;

export const ExpansionPanelHeader = styled.div`
    cursor: pointer;
    padding: 15px 0;
    transition: background-color 0.3s linear;

    &:hover {
        background-color: ${colors.get('smoke')};
    }

    ${props => props.headerStyles};
`;

export const ExpansionPanelContent = styled.div`
    overflow: ${(props) => props.opened ? 'visible' : 'hidden'};
    height  : ${(props) => props.opened ? 'auto' : 0};
`;
