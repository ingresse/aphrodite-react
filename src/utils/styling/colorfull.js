import { css } from '@emotion/core';
import utility from '../colors/colors.utils';

export const colorfull = ({
  background,
  backgroundColor,
  color,
  textColor,
  ...componentProps
}) => css`
  background: ${utility.getFullColor(componentProps, background)};
  background-color: ${utility.getFullColor(componentProps, backgroundColor)};
  color: ${(!color && !textColor) ? null : utility.getFullColor(componentProps, (textColor || color))};
`;
