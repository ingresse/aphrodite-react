import { css } from '@emotion/core';
import { colorfull } from './colorfull';
import { flex } from './flex';
import { radius } from './radius';

const styling = (props) => css`
  ${colorfull(props)};
  ${flex(props)};
  ${radius(props)};
`;

styling.colorfull = colorfull;
styling.flex = flex;
styling.radius = radius;

export { styling };
