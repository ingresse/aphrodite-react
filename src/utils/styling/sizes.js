import { css } from '@emotion/core';

/**
 * Helps to decide if some size is valid
 *
 * @param {number|string} size
 * @param {boolean}       allowNegative
 *
 * @returns {object|string} in case of invalid, returns `null`
 */
export function validateSize(size, allowNegative = false){
  const type              = typeof size;
  const splitted          = `${size}`.split(' ');
  const hasNumberNegative = splitted.some((side) => parseFloat(side, 10) < 0);
  const isString          = type === 'string';
  const isNumber          = type === 'number';
  const isNumberAndValid  = (isNumber && (allowNegative || !hasNumberNegative));
  const isStringAndValid  = (isString && (allowNegative || !hasNumberNegative));

  return (!isNumber && !isString) ? null : (
    isStringAndValid ? size : (
      isNumberAndValid ? `${size}px` : null
    )
  );
}

/**
 * Applies CSS border-radius based on received component props.
 * In case of inexistent radius props, will not apply any CSS.
 *
 * @param {object} component props: borderRadius or radius
 *
 * @returns {string} css rules
 */
export function borderRadius({
  aphradius,
  aphRadius,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  radius,
}) {
  return css`
    border-radius             : ${validateSize(aphradius)};
    border-radius             : ${validateSize(aphRadius)};
    border-radius             : ${validateSize(radius)};
    border-radius             : ${validateSize(borderRadius)};
    border-top-left-radius    : ${validateSize(borderTopLeftRadius)};
    border-top-right-radius   : ${validateSize(borderTopRightRadius)};
    border-bottom-right-radius: ${validateSize(borderBottomRightRadius)};
    border-bottom-left-radius : ${validateSize(borderBottomLeftRadius)};
  `;
}

/**
 * Applies CSS height and min-height based on received component props.
 * In case of inexistent radius props, will not apply any CSS.
 *
 * @param {object} component props: height or minHeight
 *
 * @returns {string} css rules
 */
export function height({
  aphheight,
  aphHeight,
  aphminheight,
  aphMinHeight,
  height,
  minHeight,
}) {
  return css`
    height: ${validateSize(aphheight)};
    height: ${validateSize(aphHeight)};
    height: ${validateSize(height)};

    min-height: ${validateSize(aphminheight)};
    min-height: ${validateSize(aphMinHeight)};
    min-height: ${validateSize(minHeight)};
  `;
}

/**
 * Applies CSS margins based on received component props.
 * In case of inexistent margin props, will not apply any CSS.
 *
 * @param {object} component props: margin, marginTop, marginRight, marginBottom, marginLeft
 *
 * @returns {string} css rules
 */
export function margin({
  aphmargin,
  aphMargin,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) {
  return css`
    margin       : ${validateSize(aphmargin, true)};
    margin       : ${validateSize(aphMargin, true)};
    margin       : ${validateSize(margin, true)};
    margin-top   : ${validateSize(marginTop, true)};
    margin-right : ${validateSize(marginRight, true)};
    margin-bottom: ${validateSize(marginBottom, true)};
    margin-left  : ${validateSize(marginLeft, true)};
  `;
}

/**
 * Applies CSS paddings based on received component props.
 * In case of inexistent paddings props, will not apply any CSS.
 *
 * @param {object} component props: padding, paddingTop, paddingRight, paddingBottom, paddingLeft
 *
 * @returns {string} css rules
 */
export function padding({
  aphpadding,
  aphPadding,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}) {
  return css`
    padding       : ${validateSize(aphpadding)};
    padding       : ${validateSize(aphPadding)};
    padding       : ${validateSize(padding)};
    padding-top   : ${validateSize(paddingTop)};
    padding-right : ${validateSize(paddingRight)};
    padding-bottom: ${validateSize(paddingBottom)};
    padding-left  : ${validateSize(paddingLeft)};
  `;
}

/**
 * Applies CSS width and min-width based on received component props.
 * In case of inexistent radius props, will not apply any CSS.
 *
 * @param {object} component props: width or minWidth
 *
 * @returns {string} css rules
 */
export function width({
  aphwidth,
  aphWidth,
  aphminwidth,
  aphMinWidth,
  width,
  minWidth,
}) {
  return css`
    width: ${validateSize(aphwidth)};
    width: ${validateSize(aphWidth)};
    width: ${validateSize(width)};

    min-width: ${validateSize(aphminwidth)};
    min-width: ${validateSize(aphMinWidth)};
    min-width: ${validateSize(minWidth)};
  `;
}

/**
 * Applies CSS sizes to border radius, margins and paddings, based on received component props.
 * In case of inexistent radius props, will not apply any CSS.
 *
 * @param {object} component props: borderRadius or radius
 *
 * @returns {string} css rules
 */
export function sizes(props) {
  return css`
    ${width(props)};
    ${height(props)};
    ${margin(props)};
    ${padding(props)};
    ${borderRadius(props)};
  `;
}
