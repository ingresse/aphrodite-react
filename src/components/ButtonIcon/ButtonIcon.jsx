import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';

export default function ButtonIcon({
  icon,
  radius = '50%',
  size = 40,
  shadow = false,
  styles = {},
  ...props
}) {
  const btnSize = `${size}px`;
  const iconProps = (typeof icon === 'object' ? icon : {});
  const { slug } = iconProps;
  const iconSlug = (typeof icon === 'string' ? icon : slug);

  return !iconSlug ? null : (
    <Button
      link
      {...props}
      styles={{
        padding: 0,
        width: btnSize,
        height: btnSize,
        minWidth: 'auto',
        borderRadius: radius,
        boxShadow: !shadow ? null : (typeof shadow === 'string' ? shadow : '0 2px 10px 0 rgba(0,0,0,0.1)'),
        ...styles,
      }}
    >
      <Icon
        size={size / 2}
        slug={iconSlug}
        {...iconProps}
      />
    </Button>
  );
}
