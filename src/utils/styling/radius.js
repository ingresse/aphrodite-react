import { css } from '@emotion/core';

export const radius = ({
  borderRadius,
  radius,
}) => css`
  border-radius: ${(
    !radius ? null : (
      (typeof radius === 'number') ? `${radius}px` : radius
    )
  )};
  border-radius: ${(
    !borderRadius ? null : (
      (typeof borderRadius === 'number') ? `${borderRadius}px` : borderRadius
    )
  )};
`;