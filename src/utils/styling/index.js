import { css } from '@emotion/core';
import { colorfull } from './colorfull';
import { flex } from './flex';
import { sizes } from './sizes';

const styling = (props) => css`
  ${colorfull(props)};
  ${flex(props)};
  ${sizes(props)};
`;

styling.colorfull = colorfull;
styling.flex      = flex;
styling.sizes     = sizes;

export { styling };
