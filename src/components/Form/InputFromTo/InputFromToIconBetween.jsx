import React from 'react';
import styled from '@emotion/styled';
import Icon from '../../Icons/Icon';
import { colors } from '../../../utils';

const IconFromToIconBetweenWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2.5px 0;
  background-color: ${({ disabled, ...props }) => colors.getFullColor(props, (disabled ? 'disabled' : 'background'))};
`;

export default function IconFromToIconBetween({ disabled, ...props }) {
  return (
    <IconFromToIconBetweenWrapper disabled={disabled}>
      <Icon {...props} />
    </IconFromToIconBetweenWrapper>
  );
}
