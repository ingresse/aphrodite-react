import React from 'react';
import styled from '@emotion/styled';
import Icon from '../../Icons/Icon';
import { colors } from '../../../utils';

const IconFromToIconBetweenWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5px;
  background-color: ${({ disabled, ...props }) => colors.getFullColor(props, (disabled ? 'disabled' : 'background'))};
`;

export default function IconFromToIconBetween({ disabled, ...props }) {
  return (
    <IconFromToIconBetweenWrapper disabled={disabled}>
      <Icon {...props} />
    </IconFromToIconBetweenWrapper>
  );
}
