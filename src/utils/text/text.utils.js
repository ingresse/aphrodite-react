/**
 * Typography common styles
 */
import { SIZES } from '../../constants';
import colors from '../colors/colors.utils';

/**
 * Text
 */
export const text = (props, size = '') => `
    ${!props.margin ? '' : `
        margin: ${props.margin};
    `};
    ${!props.padding ? '' : `
        padding: ${props.padding};
    `};

    ${textDefinitions(props, size)};
    ${textSizes(props)};
    ${textAlign(props)};
    ${textTransform(props)};
    ${textBreakAll(props)};
    ${textColorfull(props)};
    ${textTruncate(props)};
`;

/**
 * Text Align
 */
export const textAlign = (props = {}) => (!props.textAlign && !props.textLeft && !props.textCenter && !props.textRight) ? '' : `
    text-align: ${(props.textLeft ? 'left' : (props.textCenter ? 'center' : (props.textRight ? 'right' : props.textAlign)))};
`;

/**
 * Text Break All words
 */
export const textBreakAll = (props = {}) => (!props.breakAll && !props.textBreakAll) ? '' : `
    word-break: break-all;
`;

/**
 * Text Colorfull
 */
export const textColorfull = (props = {}) => (!props.textColor && !props.link && !props.helper) ? '' : `
    color: ${colors.getFullColor(props,
        props.link ? 'link' : (props.helper ? 'helper' : props.textColor)
    )};
`;

/**
 * Text Definitions
 */
export const textDefinitions = (props, size = '') => `
    font-size  : ${!size ? '' : (size.includes('px') ? size : (SIZES[size.toUpperCase()].FONT_SIZE))};
    line-height: ${!size ? '' : (size.includes('px') ? size : (SIZES[size.toUpperCase()].LINE_HEIGHT))};
`;

/**
 * Text Definitions
 */
export const textSizes = ({
    bold,
    fontSize,
    fontWeight,
    lineHeight,
    textBold,
    textDecoration,
    textSmall,
    textTransform,
}) => `
    font-weight    : ${(bold || textBold) ? 'bold' : (fontWeight || '')};
    font-size      : ${textSmall ? '14px' : (fontSize || '')};
    line-height    : ${lineHeight || ''};
    text-decoration: ${textDecoration || ''};
    text-transform : ${textTransform || ''};
`;

/**
 * Text Transform
 */
export const textTransform = (props = {}) => (!props.textLower && !props.textUpper) ? '' : `
    text-transform: ${(props.textLower ? 'lowercase' : 'uppercase')};
`;

/**
 * Text Truncate
 */
export const textTruncate = (props = {}) => (!props.truncate && !props.textTruncate) ? '' : `
    overflow     : hidden;
    white-space  : nowrap;
    text-overflow: ellipsis;
`;
