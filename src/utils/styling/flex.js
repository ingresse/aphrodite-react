import { css } from '@emotion/core';

export const flex = ({
  alignContent,
  alignItems,
  alignSelf,
  display,
  flex,
  flexDirection,
  flexDisplay,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  order,
}) => css`
  align-content  : ${alignContent || null};
  align-items    : ${alignItems || null};
  align-self     : ${alignSelf || null};
  display        : ${display || (!flexDisplay ? null : 'flex')};
  flex           : ${!flex ? null : (typeof flex === 'boolean' ? '1 auto' : flex)};
  flex-direction : ${flexDirection || null};
  flex-grow      : ${flexGrow || null};
  flex-shrink    : ${flexShrink || null};
  flex-wrap      : ${flexWrap || null};
  justify-content: ${justifyContent || null};
  order          : ${order || null};
`;
