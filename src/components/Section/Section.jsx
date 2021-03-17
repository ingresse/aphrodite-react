import React from 'react';
import propTypes from 'prop-types';
import Layer from '../Layer/Layer';
import SectionTitle from './SectionTitle';
import Styled from '../Styled/Styled';

function Section({
  after,
  before,
  className,
  children,
  loading,
  htmlTitle,
  title,
  withLayer,
  wrapper,
  ...rest
}) {
  const classList    = `${!className ? '' : `${className} `}aph-section`;
  const Content      = withLayer ? Layer : Styled;
  const titleProps   = {
    margin : '0',
    padding: '0',
    wrapper: !withLayer ? {} : {
      ...(title.wrapper || {}),
      styles: {
        marginBottom: '-5px',
        ...((title.wrapper || {}).styles || {}),
      },
    },
    ...(title && title.children ? title : {}),
    ...(title && !title.children && ['object', 'string'].includes(typeof title) ? { children: title } : {}),
  };

  return (
    <Styled
      as="section"
      {...wrapper}
      className={classList}
      title={htmlTitle}
    >
      {before}
      {title && (
        <SectionTitle loading={loading} {...titleProps} />
      )}
      <Content
        as="section"
        {...rest}
        className="aph-section__content"
        isLoading={loading}
        textColor={loading ? 'disabled' : (rest.color || rest.textColor || '')}
        wrapperStyles={{
          marginBottom: !withLayer ? null : '10px',
          ...(rest.wrapperStyles || {}),
        }}
      >
        {children}
      </Content>
      {after}
    </Styled>
  );
}

Section.defaultProps = {
  after    : undefined,
  before   : undefined,
  loading  : false,
  htmlTitle: '',
  title    : '',
  withLayer: true,
  wrapper  : {
    padding: '10px 0',
  },
};

Section.propTypes = {
  /**
   * Content after the section content, inside the wrapper
   */
  after: propTypes.any,

  /**
   * Content before the section content, inside the wrapper
   */
  before: propTypes.any,

  /**
   * Loading state
   */
  loading: propTypes.bool,

  /**
   * Fallback to "title" mouse hover feature
   */
  htmlTitle: propTypes.string,

  /**
   * 'SectionTitle' props, or use a simple string, or could use an element too
   */
  title: propTypes.oneOfType([ propTypes.string, propTypes.object, propTypes.element ]),

  /**
   * Indicates if the white box "Layer" component will be the content wrapper
   */
  withLayer: propTypes.bool,

  /**
   * Wrapper props
   */
  wrapper: propTypes.object,
};

export default Section;
