import styled from '@emotion/styled';
import { colors } from '../../utils';

const Toggle = styled.div`
  box-sizing: border-box;
  overflow  : hidden;

  display        : flex;
  flex           : 1 auto;
  flex-direction : row;
  align-items    : flex-end;
  justify-content: center;

  border-bottom: 2px solid ${({ color, ...props }) => colors.getFromTheme(props, color || 'secondary')};

  ${({ styles }) => styles};
`;

export default Toggle;
