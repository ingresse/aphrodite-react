import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { toggleLocationHash } from '../../utils';
import Styled from '../Styled/Styled';

function SectionTitle({
  after,
  before,
  className,
  children,
  fontWeight,
  fontSize,
  lineHeight,
  loading,
  id,
  onClick,
  onScroll,
  scroll,
  scrollAfter,
  styles,
  textColor,
  wrapper,
  ...rest
}) {
  const ref                     = useRef(null);
  const [isHashed, setIsHashed] = useState(window.location.hash.includes(id));
  const paddings                = rest.padding.split(' ');
  const paddingTopInt           = parseInt((styles || {}).paddingTop || paddings[0], 10);
  const classList               = (
    `${!className ? '' : `${className} `}aph-section__title${isHashed ? ' aph-section__title--hashed' : ''}`
  );

  /**
   * Handle Scroll
   */
  const handleScroll = useCallback(() => {
    setTimeout(() => {
      function scrollToElement() {
        const { current } = (ref || {});

        if (!current || !current.scrollIntoView) {
          return;
        }

        current.scrollIntoView({ behavior: 'smooth' });
        onScroll();
      }

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(scrollToElement);

      } else {
        scrollToElement();
      }
    }, scrollAfter);
  }, [ref, scrollAfter]);

  /**
   * Handle Click
   */
  const handleClick = useCallback((evt) => {
    const isOnHash = (window.location.hash.includes(id));

    setIsHashed(!isOnHash);
    toggleLocationHash(isOnHash ? '' : id);
    onClick(evt);
  }, [id]);

  /**
   * Handle Hash
   */
  const handleHash = useCallback(() => {
    setIsHashed(window.location.hash.includes(id));
  }, [id]);

  /**
   * Scroll Change
   */
  useLayoutEffect(() => {
    if (!id || !window.location.hash.includes(id) || !scroll) {
      return;
    }

    handleScroll();
  }, [id, scroll, handleScroll]);

  /**
   * Watch hash changes
   */
  useLayoutEffect(() => {
    if (!id) {
      return;
    }

    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, [id, handleHash]);

  return (
    <Styled as="header" {...wrapper}>
      {before}
      <Styled
        ref={ref}
        id={id}
        as="h3"
        className={classList}
        onClick={handleClick}
        textColor={loading ? 'disabled' : textColor}
        styles={{
          cursor  : (id ? 'pointer' : null),
          display : 'block',
          position: 'relative',
          fontSize,
          fontWeight,
          lineHeight,
          ...(!id ? {} : {
            '&:before': {
              content   : '"#"',
              position  : 'absolute',
              top       : '0',
              left      : '-10px',
              width     : '30px',
              height    : '30px',
              opacity   : '1',
              transition: 'color 0.15s ease, opacity 0.15s ease',
              color     : 'transparent',
              fontFamily: 'monospace',
              fontSize  : '20px',
              lineHeight: '30px',
              textAlign : 'center',
            },
            '&.aph-section__title--hashed, &:hover': {
              '&:before': {
                color  : 'currentColor',
                opacity: '0.5',
              },
            },
            '&.aph-section__title--hashed:hover:before': {
              opacity: '1',
            },
          }),
          ...(styles || {}),
        }}
        {...rest}
      >
        {children}
      </Styled>
      {after}
    </Styled>
  );
}

SectionTitle.defaultProps = {
  className  : '',
  fontWeight : 'bold',
  fontSize   : '20px',
  lineHeight : '30px',
  margin     : '0',
  onClick    : () => {},
  onScroll   : () => {},
  padding    : '15px 0 5px',
  scroll     : true,
  scrollAfter: 1000,
  wrapper    : {},
};

SectionTitle.propTypes = {
  /**
   * Content after the title element
   */
  after: propTypes.any,

  /**
   * Content before the title element
   */
  before: propTypes.any,

  /**
   * Font Weight
   */
  fontWeight: propTypes.string,

  /**
   * Font Size
   */
  fontSize: propTypes.string,

  /**
   * Line Height
   */
  lineHeight: propTypes.string,

  /**
   * Element ID
   */
  id: propTypes.string,

  /**
   * On click callback
   */
  onClick: propTypes.func,

  /**
   * On scroll callback
   */
  onScroll: propTypes.func,

  /**
   * Should scroll to the title position on element render?
   */
  scroll: propTypes.bool,

  /**
   * Scroll after some milliseconds
   */
  scrollAfter: propTypes.number,

  /**
   * Wrapper props (Styled)
   */
  wrapper: propTypes.object,
};

export default SectionTitle;
