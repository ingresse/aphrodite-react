/**
 * Typography common styles
 */

/* Helpers */
import { SIZES } from '../../constants';

/* Utils */
import { colors } from '../../utils';

/**
 * Text
 */
export const text = (props, size = 'MD') => `
    ${!props.margin ? '' : `
        margin: ${props.margin};
    `};
    ${!props.padding ? '' : `
        padding: ${props.padding};
    `};

    ${textDefinitions(props, size)};
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
export const textBreakAll = (props = {}) => (!props.breakAll) ? '' : `
    word-break: break-all;
`;

/**
 * Text Colorfull
 */
export const textColorfull = (props = {}) => (!props.textColor && !props.link && !props.helper) ? '' : `
    color: ${colors.getFromTheme(props,
        props.link ? 'link' : (props.helper ? 'helper' : props.textColor)
    )};
`;

/**
 * Text Definitions
 */
export const textDefinitions = (props = {}, size = 'MD') => `
    font-weight: ${(SIZES[props.bold ? 'XL' : 'MD'].FONT_WEIGHT)};
    font-size  : ${(SIZES[size].FONT_SIZE)};
    line-height: ${(SIZES[size].LINE_HEIGHT)};
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
export const textTruncate = (props = {}) => (!props.truncate) ? '' : `
    overflow     : hidden;
    white-space  : nowrap;
    text-overflow: ellipsis;
`;
