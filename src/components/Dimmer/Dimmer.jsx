import React, { Fragment, useCallback, useLayoutEffect, useState } from 'react';
import propTypes from 'prop-types';
import { css, Global } from '@emotion/core';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Icon from '../Icons/Icon';
import Styled from '../Styled/Styled';

export default function Dimmer({
  blur,
  children,
  className,
  buttons,
  delay,
  id,
  icon,
  inverse,
  opened,
  openedCallback,
  styles,
  title,
  ...rest
}) {
  const transition = (delay / 1000);
  const dimmerId = `dimmer_${id || Math.round(Math.random() * 100)}`;
  const [visiblity, setVisibility] = useState(opened);
  const iconProps = {
    size: 60,
    ...(typeof icon === 'string' ? { slug: icon } : icon),
  };
  const titleProps = {
    ...(typeof title === 'string' ? { children: title } : title),
    styles: {
      fontWeight: 700,
      fontSize: '22px',
      lineHeight: '30px',
      ...((title || {}).styles || {}),
    },
  };

  const handleParentClassName = useCallback((isVisible, optClassName) => {
    try {
      document.getElementById(dimmerId).parentElement.classList[isVisible ? 'add' : 'remove'](optClassName || 'aph-dimmer-wrapper--active');
    } catch (e) {
      console.error(e);
    }
  });

  const handleVisibility = useCallback((isVisible) => {
    handleParentClassName(isVisible);

    setTimeout(() => {
      setVisibility(isVisible);
    }, delay);
  }, [delay, dimmerId, handleParentClassName]);

  useLayoutEffect(() => {
    handleVisibility(opened);
  }, [opened, handleVisibility]);

  useLayoutEffect(() => {
    handleParentClassName(true, 'aph-dimmer-wrapper');

    return () => {
      handleParentClassName(false, 'aph-dimmer-wrapper');
      handleParentClassName(false, 'aph-dimmer-wrapper--active');
    };
  }, [handleParentClassName]);

  return (
    <Styled
      id={dimmerId}
      as="dialog"
      className={`${className || ''} aph-dimmer`}
      backgroundColor={inverse ? 'smoke,original,0.75' : 'base,original,.5'}
      textColor={inverse ? 'base' : 'inverse'}
      textAlign="center"
      radius={10}
      styles={{
        position: 'absolute',
        overflow: (opened ? 'auto' : 'hidden'),
        opacity: (opened ? 1 : 0),
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        border: 0,
        outline: 0,
        width: 'auto',
        height: 'auto',
        transform: `scale(${opened ? 1 : 0})`,
        willChange: 'line-height,opacity,overflow,top,transform',
        lineHeight: opened ? null : 0,
        transition: `all ${transition}s ease`,
        display: 'flex',
        flex: '1 auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '> .aph-dimmer__block': {
          display: 'block',
          width: '100%',
        },
        '.aph-dimmer__buttons': {
          width: 'calc(100% + 20px)',
        },
        ...styles,
      }}
      {...rest}
    >
      {blur && (
        <Global
          styles={css`
            .aph-dimmer-wrapper {
              position: relative;

              > *:not(.aph-dimmer) {
                transition: filter 0.1s ease;
              }

              &--active {
                > *:not(.aph-dimmer) {
                  filter: blur(${blur});
                }
              }
            }
          `}
        />
      )}
      {visiblity && (
        <Fragment>
          {icon && (
            <Styled
              className="aph-dimmer__block aph-dimmer__icon"
              padding={(!title && children) ? '0' : '0 0 5px'}
              styles={{ lineHeight: 0 }}
            >
              <Icon
                {...iconProps}
              />
            </Styled>
          )}
          {title && (
            <Styled
              className="aph-dimmer__block aph-dimmer__title"
              padding="5px 0"
            >
              <Styled {...titleProps} />
            </Styled>
          )}
          {children && (
            <Styled
              className="aph-dimmer__block aph-dimmer__content"
              padding="5px 0"
            >
              {children}
            </Styled>
          )}
          {!buttons || !buttons.length ? null : (
            <Styled
              className="aph-dimmer__block aph-dimmer__buttons"
              margin="0 -10px"
              padding="5px 0"
              styles={{
                lineHeight: 0,
                '.aph-btn': {
                  margin: '10px',
                },
              }}
            >
              {buttons.map((btn, index) => {
                const elementKey = `${dimmerId}_btn_${index}`;
                const { icon: btnIcon, ...btnRest } = (btn || {});
                const btnIconProps = typeof btnIcon === 'object' ? btnIcon : {
                  icon: btnIcon,
                };

                return btnIcon ? (
                  <ButtonIcon key={elementKey} {...btnIconProps} {...btnRest} />
                ) : (
                  <Button key={elementKey} {...btnRest} />
                );
              })}
            </Styled>
          )}
          {openedCallback && (
            <ButtonIcon
              link
              icon="times"
              tabIndex="-1"
              color="currentColor"
              onClick={() => openedCallback(false)}
              styles={{
                position   : 'absolute',
                top        : '15px',
                right      : '15px',
                boxShadow  : 'none',
                transition : 'box-shadow 0.5s ease',
                '&:active, &:focus, &:hover': {
                  backgroundColor: 'transparent',
                  boxShadow      : '0 0 3px -1px',
                },
              }}
            />
          )}
        </Fragment>
      )}
    </Styled>
  );
}

Dimmer.defaultProps = {
  blur   : '3px',
  buttons: [],
  delay  : 250,
  icon   : '',
  id     : '',
  inverse: false,
  padding: '10px 15px',
  title  : '',
  opened: false,
};

Dimmer.propTypes = {
  /**
   * Parent child-nodes blur radius
   */
  blur: propTypes.string,

  /**
   * Buttons
   */
  buttons: propTypes.array,

  /**
   * Content inside
   */
  children: propTypes.any,

  /**
   * Animation delay in miliseconds
   */
  delay: propTypes.number,

  /**
   * Content Icon. Pass the icon slug as string or an object representing the icon props.
   */
  icon: propTypes.oneOfType([ propTypes.string, propTypes.object ]),

  /**
   * Required to avoid problems
   */
  id: propTypes.string.isRequired,

  /**
   * Changes background and text color schema.
   * It's overrided by `backgroundColor` and `textColor` props.
   */
  inverse: propTypes.bool,

  /**
   * Dimmer visibility
   */
  opened: propTypes.bool,

  /**
   * Function to display the default close button inside
   */
  openedCallback: propTypes.func,

  /**
   * Wrapper internal spacement
   */
  padding: propTypes.string,

  /**
   * Content Title
   */
  title: propTypes.oneOfType([ propTypes.string, propTypes.object ]),
};
