
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, styling, text } from '../../utils';
import { MEDIA_QUERIES } from '../../constants';

const StyledStyled = styled.div`
    box-sizing   : border-box;
    box-shadow   : ${({ customBoxShadow }) => customBoxShadow || null};

    margin : ${({ customMargin }) => customMargin};
    padding: ${({ customPadding, withLink }) => (!customPadding || withLink) ? null : customPadding};

    ${({
      background,
      backgroundColor,
      color,
      customPadding,
      hoverable,
      textColor,
      withLink,
      ...props
    }) => !withLink ? null : css`
      backround-color: ${background || backgroundColor ? null : 'transparent'};

      ${hoverable && `
        &:active, &:hover, &:focus {
          background-color: ${colors.getFullColor(props, (typeof hoverable === 'string' ? hoverable : 'background'))};
        }
      `};

      a:first-of-type {
        color: ${color || textColor ? colors.getFullColor(props, (color || textColor)) : 'inherit'};
        display: block;
        padding: ${customPadding || null};
        text-decoration: none;
      }
    `};

    transition: all 0.2s ease;

    ${(props) => styling(props)};
    ${(props) => text(props, props.textSize)};
    ${({ customStyles }) => customStyles};
    ${({ stylesXS }) => stylesXS ? null : css`
      ${MEDIA_QUERIES.LT.SM} {
        ${stylesXS};
      }
    `};
`;

const Styled = forwardRef(({
  border,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  className,
  margin,
  padding,
  radius,
  shadow,
  shadowColor,
  shadowSpread,
  styles,
  ...props
}, ref) => {
  const getColorNotBool    = (desired) => (typeof desired !== 'string' ? '' : desired);
  const getSpacement       = (size) => ((typeof size === 'number') ? `${size}px` : size);
  const shadowColorDefault = colors.getFullColor(props, (shadowColor || 'shadow'));
  const borderColorDefault = (borderColor || 'border');
  const boxShadow          = [
    (!border && !borderTop) ? ''    : `inset 0 1px 0 0 ${colors.getFullColor(props, (getColorNotBool(borderTop || border) || borderColorDefault))}`,
    (!border && !borderRight) ? ''  : `inset -1px 0 0 0 ${colors.getFullColor(props, (getColorNotBool(borderRight || border) || borderColorDefault))}`,
    (!border && !borderBottom) ? '' : `inset 0 -1px 0 0 ${colors.getFullColor(props, (getColorNotBool(borderBottom || border) || borderColorDefault))}`,
    (!border && !borderLeft) ? ''   : `inset 1px 0 0 0 ${colors.getFullColor(props, (getColorNotBool(borderLeft || border) || borderColorDefault))}`,
    !shadow ? ''       : (typeof shadow === 'string' ? shadow : `0 0 ${shadowSpread || '10px'} ${shadowColorDefault}`),
  ].filter((border) => border);

  return (
    <StyledStyled
      ref={ref}
      borderRadius={borderRadius || radius}
      className={`${className ? `${className} ` : ''}aph-styled`}
      customBoxShadow={boxShadow.join(', ')}
      customMargin={getSpacement(margin)}
      customPadding={getSpacement(padding)}
      customStyles={styles}
      {...props}
    />
  );
});

Styled.propTypes = {
  /**
   * HTML Tag as string or one React Component:
   * <Styled as={Container}>Try this</Styled>
   */
  as: propTypes.oneOfType([ propTypes.string, propTypes.element ]),

  /**
   * Uses inset `box-shadow` as border at top.
   * String to pass the color.
   */
  borderTop: propTypes.oneOfType([ propTypes.bool, propTypes.string ]),

  /**
   * Uses inset `box-shadow` as border at right.
   * String to pass the color.
   */
  borderRight: propTypes.oneOfType([ propTypes.bool, propTypes.string ]),

  /**
   * Uses inset `box-shadow` as border at bottom.
   * String to pass the color.
   */
  borderBottom: propTypes.oneOfType([ propTypes.bool, propTypes.string ]),

  /**
   * Uses inset `box-shadow` as border at left.
   * String to pass the color.
   */
  borderLeft: propTypes.oneOfType([ propTypes.bool, propTypes.string ]),

  /**
   * The color of border/`box-shadow`
   */
  borderColor: propTypes.string,

  /**
   * Border Radius
   */
  borderRadius: propTypes.oneOfType([ propTypes.string, propTypes.number ]),

  /**
   * Background Color from `colors` utility
   *
   * You can use like this: color="ocean,crystal,0.5"
   */
  background: propTypes.string,

  /**
   * Text Color from `colors` utility.
   *
   * You can use like this: color="ocean,dark"
   */
  color: propTypes.string,

  /**
   * On mouse hover, changes background color.
   */
  hoverable: propTypes.oneOfType([ propTypes.bool, propTypes.string ]),

  /**
   * Box Margin
   */
  margin: propTypes.oneOfType([ propTypes.string, propTypes.number ]),

  /**
   * Box Padding
   */
  padding: propTypes.oneOfType([ propTypes.string, propTypes.number ]),

  /**
   * Sames as Border Radius
   */
  radius: propTypes.oneOfType([ propTypes.string, propTypes.number ]),

  /**
   * Box Shadow
   */
  shadow: propTypes.oneOfType([ propTypes.bool, propTypes.string ]),

  /**
   * Box Shadow color
   */
  shadowColor: propTypes.string,

  /**
   * Box Shadow spread. Ex.: shadowSpread="5px"
   */
  shadowSpread: propTypes.string,

  /**
   * Custom Styles
   */
  styles: propTypes.object,

  /**
   * Custom Styles to screens smaller than 768px
   */
  stylesXS: propTypes.object,

  /**
   * Text Align
   */
  textAlign: propTypes.string,

  /**
   * Applies heavy `font-weight`
   */
  textBold: propTypes.bool,

  /**
   * Applies `word-break: break-all;`
   */
  textBreakAll: propTypes.bool,

  /**
   * Text Aligned at center
   */
  textCenter: propTypes.bool,

  /**
   * Text Color, same as `color` prop
   */
  textColor: propTypes.string,

  /**
   * Text Color as color `helper` from colors utility
   */
  textHelper: propTypes.bool,

  /**
   * Text Color as color `link` from colors utility
   */
  textLink: propTypes.bool,

  /**
   * Text Lowercase
   */
  textLower: propTypes.bool,

  /**
   * Text Uppercase
   */
  textUpper: propTypes.bool,

  /**
   * Text Size
   */
  textSize: propTypes.oneOf([ 'xs', 'sm', 'md', 'lg' ]),

  /**
   * Text Truncate applies css rules to don't break lines and hide text/content
   */
  textTruncate: propTypes.bool,

  alignContent: propTypes.string,
  alignItems: propTypes.string,
  alignSelf: propTypes.string,
  display: propTypes.string,
  flex: propTypes.oneOfType([ propTypes.bool, propTypes.number, propTypes.string ]),
  flexDirection: propTypes.string,
  flexDisplay: propTypes.string,
  flexGrow: propTypes.string,
  flexShrink: propTypes.string,
  flexWrap: propTypes.string,
  justifyContent: propTypes.string,
  order: propTypes.oneOfType([ propTypes.number, propTypes.string ]),
};

export default Styled;
