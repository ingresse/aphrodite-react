import React from 'react';
import styled from '@emotion/styled';
import { useWindowSize } from '../../hooks';
import { colors } from '../../utils';

const ToggleButtonStyled = styled.button`
  box-sizing: border-box;
  overflow  : hidden;

  display        : flex;
  flex           : 1 auto;
  flex-direction : row;
  align-items    : flex-end;
  justify-content: center;

  font-weight   : ${({ active }) => (!active ? 'normal' : 'bold')};
  font-size     : 16px;
  line-height   : 20px;
  text-transform: uppercase;

  border : 0;
  outline: 0;
  margin : 0;
  padding: ${({ xs }) => xs ? 9 : 10}px 5px 6px;

  cursor    : ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;

  border-radius   : 5px 5px 0 0;
  border-bottom   : ${({ xs }) => xs ? 3 : 2}px solid ${({ active, color, ...props }) => !active ? 'transparent' : colors.getFromTheme(props, color)};
  background-color: transparent;
  color           : ${({ color, ...props }) => colors.getFromTheme(props, color)};

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ background, ...props }) => colors.getFromTheme(props, background)};
  }

  ${({ styles }) => styles};
`;

export default function ToggleButton({
  color      = 'secondary',
  background = 'background',
  ...props
}) {
  const { xs } = useWindowSize();

  return (
    <ToggleButtonStyled
      xs={xs}
      color={color}
      background={background}
      role="button"
      {...props}
    />
  );
}
