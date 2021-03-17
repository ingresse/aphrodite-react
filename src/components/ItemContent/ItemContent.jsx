import React, { Fragment } from 'react';
import Placeholder from '../Placeholder/Placeholder';
import Styled from '../Styled/Styled';
import Tooltip from '../Tooltip/Tooltip';

export default function ItemContent({
  loading = false,
  children,
  className,
  compact = false,
  padding = '5px 0',
  label = '',
  labelProps = {},
  wrapperProps = {},
  placeholderWidth = 140,
  placeholderHeight = 16,
  placeholderRadius = 4,
  placeholderMargin = '2px 0 -3px',
  tooltip = '',
  id = '',
  ...rest
}) {
  const classList           = `${!className ? '' : `${className} `}aph-item-content`;
  const getElementId        = (elementId) => !id ? '' : `${id}_${elementId}`;
  const getIdProp           = (elementId) => !id ? {} : { id: getElementId(elementId) };
  const ContentWrapper      = (tooltip ? Tooltip : Fragment);
  const contentWrapperProps = (!tooltip ? {} : (typeof tooltip === 'object' ? tooltip : {
    tip: tooltip,
  }));
  const textSizeProp = !compact ? {} : {
    textSize: 'sm',
  };

  return (
    <Styled
      className={classList}
      padding={padding}
      {...getIdProp('wrapper')}
      {...wrapperProps}
    >
      <ContentWrapper {...contentWrapperProps}>
        {label && (
          <Styled
            textColor={loading ? 'disabled' : 'helper'}
            {...getIdProp('label')}
            {...textSizeProp}
            {...labelProps}
          >
            {label}
          </Styled>
        )}
        {(children || loading) && (
          <Styled
            {...getIdProp('content')}
            {...textSizeProp}
            {...rest}
          >
            {!loading ? children : (
              <Placeholder
                radius={placeholderRadius}
                width={placeholderWidth}
                height={placeholderHeight}
                styles={{ margin: placeholderMargin }}
              />
            )}
          </Styled>
        )}
      </ContentWrapper>
    </Styled>
  );
}
