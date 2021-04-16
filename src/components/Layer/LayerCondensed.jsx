import React from 'react';
import Layer from './Layer';

export default function LayerCondensed({
  background,
  backgroundColor,
  borderTop = true,
  isLoading = false,
  paddingTop = '0',
  paddingBottom = '0',
  wrapperStyles = {},
  wrapperStylesXS = {},
  menu,
  checkbox,
  radio,
  status,
  withLink,
  ...rest
}) {
  const hasInput       = !!(checkbox || radio);
  const hasStatus      = !!status;
  const backgroundName = (!isLoading && (backgroundColor || backgroundColor) ? (background || backgroundColor) : (isLoading ? 'background' : null));

  return (
    <Layer
      backgroundColor={backgroundName}
      borderTop={borderTop}
      checkbox={checkbox}
      radio={radio}
      hoverable={true}
      isLoading={isLoading}
      menu={menu}
      margin="0"
      shadow={false}
      status={status}
      withLink={withLink}
      wrapperStyles={{
        '.aph-layer': {
          borderRadius: 0,
          paddingTop,
          paddingBottom,
          paddingLeft : (hasInput && hasStatus ? '70px' : (hasInput ? '50px' : (hasStatus ? '30px' : null))),
          transition: 'background-color ease 0.2s',
          '&__status': !status ? {} : {
            width: '20px',
            left: !hasInput ? '5px' : '45px',
            '&__description': {
              left: '20px',
            },
          },
          '&__menu': {
            right: '0',
          },
        },
        ...wrapperStyles,
      }}
      wrapperStylesXS={{
        '.aph-layer': {
          paddingLeft: hasInput && hasStatus ? '65px' : (hasStatus ? '30px' : (hasInput ? '50px' : null)),

          '&__status': !status ? {} : {
            left: !hasInput ? null : '42.5px',
          },
          '&__menu': {
            right: '2.5px',
          },
        },
        ...wrapperStylesXS,
      }}
      {...rest}
    />
  );
}

LayerCondensed.defaultProps = {
  padding: '5px 10px',
};
