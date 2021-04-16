import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import LayerMenu from './LayerMenu';
import LayerStatus from './LayerStatus';
import LayerCheckboxOrRadio from './LayerCheckboxOrRadio';
import Styled from '../Styled/Styled';
import { colors } from '../../utils';
import { MEDIA_QUERIES } from '../../constants';

const defaultClassName = 'aph-layer';
const Wrapper = styled(Styled)`
  box-sizing: border-box;
  position  : relative;
  margin    : ${({ margin }) => margin};

  &:active,
  &:hover,
  &:focus {
    .${defaultClassName} {
      &__status {
        top   : 15%;
        bottom: 15%;
      }
    }
  }

  .${defaultClassName} {
    padding-right: ${({ hasMenu }) => !hasMenu ? null : '40px'};
    padding-left : ${({ hasInput, hasStatus }) => hasInput && hasStatus ? '70px' : ((hasInput || hasStatus) ? '50px' : null)};

    a:first-of-type {
      padding-right: ${({ hasMenu }) => !hasMenu ? null : '0'};
      padding-left : ${({ hasInput, hasStatus }) => (hasInput || hasStatus) ? '0' : null};
    }

    &__menu {
      .aph-dropdown {
        &__toggle {
          border-radius: 5px;

          &:active, &:hover, &:focus {
            background-color: ${({ isLoading, ...props }) => isLoading ? 'transparent' : colors.getFullColor(props, 'secondary,original,0.05')};
          }
        }
      }
    }
  }

  ${({ styles }) => styles};

  ${MEDIA_QUERIES.LT.SM} {
    .${defaultClassName} {
      padding-left: ${({ hasInput, hasStatus }) => hasInput && hasStatus ? '70px' : ((hasInput || hasStatus) ? '40px' : null)};
    }

    ${({ stylesXS }) => stylesXS};
  }
`;
const Layer = forwardRef(({
  className,
  isLoading,
  margin,
  menu,
  before,
  after,
  checkbox,
  radio,
  status,
  wrapperStyles,
  wrapperStylesXS,
  ...props
}, ref) => {
  const cssClass     = `${className} ${defaultClassName}`;
  const hasInput     = !!(checkbox || radio);
  const hasMenu      = !!menu;
  const hasStatus    = !!status;
  const wrapperProps = {
    className: cssClass.concat('-wrapper'),
    hasInput,
    hasMenu,
    hasStatus,
    isLoading,
    margin,
    styles: wrapperStyles,
    stylesXS: wrapperStylesXS,
  };

  return (
    <Wrapper
      ref={ref}
      {...wrapperProps}
    >
      {before}
      {hasInput && (
        <LayerCheckboxOrRadio
          className={cssClass.concat('__input')}
          disabled={isLoading}
          checkbox={checkbox}
          radio={radio}
        />
      )}
      {status && (
        <LayerStatus
          className={cssClass.concat('__status')}
          disabled={isLoading}
          hasInput={hasInput}
          {...status}
        />
      )}
      <Styled
        className={cssClass}
        backgroundColor={!isLoading ? null : 'background'}
        {...props}
      />
      {menu && (
        <LayerMenu
          className={cssClass.concat('__menu')}
          disabled={isLoading}
          {...menu}
        />
      )}
      {after}
    </Wrapper>
  );
});

Layer.defaultProps = {
  className    : '',
  margin       : '15px 0',
  padding      : '15px',
  radius       : 10,
  shadow       : '0 0 5px 0 rgba(0, 0, 0, 0.1)',
  styles       : {},
  isLoading    : false,
  borderTop    : false,
  borderBottom : false,
  before       : '',
  after        : '',
  checkbox     : null,
  radio        : null,
  wrapperStyles: {},
};

Layer.propTypes = {
  /**
   * Will changes background color
   */
  isLoading: propTypes.bool,

  /**
   * External Distance to other elements
   */
  margin: propTypes.string,

  /**
   * Internal spacement
   */
  padding: propTypes.string,

  /**
   * LayerMenu component props
   */
  menu: propTypes.object,

  /**
   * Custom border radius
   */
  radius: propTypes.oneOfType([
      propTypes.string,
      propTypes.number,
  ]),

  /**
   * LayerStatus component props
   */
  status: propTypes.object,

  /**
   * Custom styles
   */
  styles: propTypes.object,

  /**
   * Text align
   */
  textAlign : propTypes.string,

  /**
   * Text color
   */
  textColor: propTypes.string,

  /**
   * Something before the content block
   */
  before: propTypes.oneOfType([propTypes.string, propTypes.element]),

  /**
   * Something after the content block
   */
  before: propTypes.oneOfType([propTypes.string, propTypes.element]),

  /**
   * Checkbox input props
   */
  checkbox: propTypes.object,

    /**
    * Radio input props
    */
  radio: propTypes.object,

  /**
   * Custom wrapper styles
   */
  wrapperStyles: propTypes.object,
};

export default Layer;
