/**
 * Utilities: Colors
 */

/* Lib Helpers */
import chroma from 'chroma-js';

/**
 * Get Color Shade Format
 *
 * @param {string} dark     - Color dark shade
 * @param {string} original - Color original shade
 * @param {string} light    - Color light shade
 * @param {string} crystal  - Color crystal shade
 *
 * @return {object}
 */
const getShadesFormat = (dark, original, light, crystal) => {
    return {
        dark,
        original,
        light,
        crystal,
    };
};

/**
 * Colors Shaded
 */
const tangerine = getShadesFormat(
    'rgb(250, 132, 9)',
    'rgb(252, 163, 17)',
    'rgb(252, 190, 24)',
    'rgb(254, 232, 195)'
);

const ocean = getShadesFormat(
    'rgb(0, 134, 201)',
    'rgb(0, 165, 219)',
    'rgb(0, 192, 232)',
    'rgb(191, 232, 246)'
);

const mercury = getShadesFormat(
    'rgb(90, 96, 101)',
    'rgb(122, 128, 133)',
    'rgb(152, 159, 163)',
    'rgb(221, 223, 224)'
);

const bamboo = getShadesFormat(
    'rgb(66, 173, 60)',
    'rgb(96, 198, 89)',
    'rgb(126, 218, 118)',
    'rgb(157, 235, 149)'
);

const sunflower = getShadesFormat(
    'rgb(255, 173, 17)',
    'rgb(255, 198, 30)',
    'rgb(255, 218, 43)',
    'rgb(255, 240, 198)'
);

const ruby = getShadesFormat(
    'rgb(230, 38, 39)',
    'rgb(239, 60, 62)',
    'rgb(245, 83, 86)',
    'rgb(251, 206, 206)'
);

const supernova = getShadesFormat(
    'rgb(141, 77, 156)',
    'rgb(172, 108, 184)',
    'rgb(198, 138, 207)',
    'rgb(234, 218, 237)'
);

const mint = getShadesFormat(
    'rgb(38, 168, 134)',
    'rgb(60, 194, 165)',
    'rgb(83, 215, 192)',
    'rgb(206, 239, 232)'
);

const oil = getShadesFormat(
    'rgb(27, 27, 27)',
    'rgb(45, 45, 45)',
    'rgb(64, 64, 64)',
    'rgb(202, 202, 202)'
);

const poison = getShadesFormat(
    'rgb(81, 108, 178)',
    'rgb(81, 108, 178)',
    'rgb(81, 108, 178)',
    'rgb(81, 108, 178)',
);

const translucid = getShadesFormat(
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.3)',
    'rgba(255, 255, 255, 0.1)',
);

const shadow = getShadesFormat(
    'rgba(0, 0, 0, 0.4)',
    'rgba(33, 43, 54, 0.1)',
    'rgba(33, 43, 54, 0.05)',
    'rgba(33, 43, 54, 0.01)',
);

let shades = {
    tangerine,
    ocean,
    oil,
    mercury,
    bamboo,
    sunflower,
    ruby,
    supernova,
    mint,
    poison,
    translucid,
    shadow,
};

/**
 * Colors Alias
 */
const aliasKeys = [
    'info',
    'success',
    'warning',
    'error',
    'link',
];
let alias = {
    primary  : tangerine,
    secondary: ocean,

    info: supernova,
    success: bamboo,
    warning: sunflower,
    error: ruby,

    link: ocean,

    approved: bamboo,
    authorized: mint,
    cancelled: mercury,
    complete: mint,
    created: tangerine,
    declined: ruby,
    draft: mercury,
    finished: mercury,
    refund: supernova,
    limitExceeded: tangerine,
    'manual review': poison,
    notStarted: sunflower,
    outOfStock: tangerine,
    pending: ocean,
    'partially-approved': sunflower,
    private: ocean,
    published: bamboo,
    scheduled: tangerine,
    soldout: supernova,
    unavailable: mercury,
};

/**
 * Elements Status
 */
const statusKeys = [
    'approved',
    'authorized',
    'cancelled',
    'complete',
    'created',
    'declined',
    'draft',
    'finished',
    'refund',
    'limitExceeded',
    'manual review',
    'notStarted',
    'outOfStock',
    'pending',
    'partially-approved',
    'private',
    'published',
    'scheduled',
    'soldout',
    'unavailable',
];

/**
 * Default Colors
 */
let stock = {
    tangerine: tangerine.original,
    ocean: ocean.original,
    mercury: mercury.original,
    bamboo: bamboo.original,
    sunflower: sunflower.original,
    ruby: ruby.original,
    supernova: supernova.original,
    mint: mint.original,
    oil: oil.original,

    primary: tangerine.original,
    secondary: ocean.original,

    info: supernova.original,
    success: bamboo.original,
    warning: sunflower.original,
    error: ruby.original,

    approved: alias.approved.original,
    authorized: alias.authorized.original,
    cancelled: alias.cancelled.original,
    complete: alias.complete.original,
    created: alias.created.original,
    declined: alias.declined.original,
    draft: alias.draft.original,
    finished: alias.finished.original,
    refund: alias.refund.original,
    limitExceeded: alias.limitExceeded.original,
    'manual review': alias['manual review'].original,
    notStarted: alias.notStarted.original,
    outOfStock: alias.outOfStock.original,
    pending: alias.pending.original,
    'partially-approved': alias['partially-approved'].original,
    private: alias.private.original,
    published: alias.published.original,
    scheduled: alias.scheduled,
    soldout: alias.soldout,
    unavailable: alias.unavailable,

    base: 'rgb(0, 0, 0)',
    inverse: 'rgb(255, 255, 255)',
    background: 'rgb(248, 248, 248)',
    translucid: translucid.original,
    shadow: shadow.original,
    border: mercury.crystal,

    disabled: mercury.crystal,
    helper: mercury.original,
    link: ocean.original,

    smoke: 'rgb(248, 248, 248)',
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
};


/**
 * All Colors
 */
let all = {
    alias : alias,

    shades: {
        ...shades,
        ...alias,
    },

    ...stock,
};

/**
 * Get Color with custom Opacity
 *
 * @param {number} opacity - between 0 and 1;
 * @param {string} color   - any rgb/rgba color;
 *
 * @return {string} RGBA Color
 */
const getOpacity = (opacity = 1, color = all.shades.mercury.original) => {
    const opacityToReplace = (!isNaN(opacity) && (opacity > 0 && opacity < 1) ? `, ${opacity})` : '');

    if (!opacityToReplace || typeof color !== 'string' ||
        (!color.includes('rgb(') && !color.includes('rgba('))) {
        return color;
    }

    return color.replace('rgb(', 'rgba(').replace(')', opacityToReplace);
};

/**
 * Get Color
 *
 * @param {string} color
 * @param {string} shade
 * @param {number} opacity
 *
 * @return {string} RGBA Color
 */
const get = (color = 'primary', shade = 'original', opacity = 1) => {
    const _color   = (color + '').toLowerCase();
    const selected = (all.shades[_color] ? all.shades[_color][shade] : (all[_color] || _color));

    if (typeof color !== 'string' || !selected) {
        return getOpacity(opacity, (selected || _color));
    }

    return getOpacity(opacity, selected);
};

/**
 * Get Color from Theme
 *
 * @param {object} componentProps
 * @param {string} colorKey
 * @param {string} colorShade
 * @param {number} opacity
 *
 * @return {string} RGBA Color
 */
const getFromTheme = (componentProps = {}, colorKey, colorShade = 'original', opacity) => {
    const { theme } = componentProps;

    if (typeof theme !== 'object' || !theme[colorKey]) {
        return get(colorKey, colorShade, opacity);
    }

    const themeShades = ((theme.shades && theme.shades[colorKey]) ?
        theme.shades[colorKey] : theme[colorKey]
    );

    if (typeof themeShades !== 'object') {
        return getOpacity(opacity, (themeShades || ''));
    }

    return getOpacity(opacity, themeShades[colorShade]);
};

/**
 * Colors reference
 */
let colors = {
    ...all,
};

/**
 * Set Colors
 *
 * @param {string} colorKey
 * @param {string} shadeOriginal
 * @param {string} shadeDark
 * @param {string} shadeLight
 * @param {string} shadeCrystal
 *
 * @param {object} colors
 */
const set = (colorKey, shadeOriginal, shadeDark, shadeLight, shadeCrystal) => {
    if (typeof colorKey !== 'string' ||
        typeof shadeOriginal !== 'string') {
        return colors;
    }

    const colorOriginal = `rgb(${chroma(shadeOriginal).rgb().join(',')})`;
    const colorDark     = (shadeDark || chroma(colorOriginal).darken().css());
    const colorLight    = (shadeLight || chroma(colorOriginal).brighten(0.5).css());
    const colorCrystal  = (shadeCrystal || chroma(colorOriginal).brighten(1).css());
    const colorShades   = getShadesFormat(colorDark, colorOriginal, colorLight, colorCrystal);
    const colorAlias    = (!aliasKeys.includes(colorKey) && !statusKeys.includes(colorKey)) ? {} : {
        ...colors.alias,
        [colorKey]: colorShades,
    };

    colors = {
        ...colors,
        alias: colorAlias,
        [colorKey]: colorOriginal,

        shades: {
            ...colors.shades,
            [colorKey]: colorShades,
        },
    };

    return colors;
};

/**
 * Get Full Color from string sentence like:
 *
 * const myColor            = colors.getFullColor('ocean');
 * const myShadedColor      = colors.getFullColor('ocean,dark');
 * const myShadedAlphaColor = colors.getFullColor('ocean,dark,0.5');
 *
 * @param {object} componentProps
 * @param {string} colorString
 *
 * @returns {string}
 */
function getFullColor(componentProps, colorString) {
    if (!colorString) {
        return colorString;
    }

    const normalized       = String(colorString);
    const isRgbOrHsl       = normalized.includes(')');
    const colorSplitted    = String(normalized).split(isRgbOrHsl ? ')' : ',');
    const colorNameOrValue = colorSplitted[0] || '';
    const colorArgs        = (!isRgbOrHsl ? colorSplitted.slice(1) : String(colorSplitted[1]).split(',')).filter((param) => param && param.trim());
    const colorKey         = colorNameOrValue.concat(isRgbOrHsl ? ')' : '');

    return getFromTheme(
        componentProps || {},
        colorKey,
        colorArgs[0],
        colorArgs[1]
    );
}

/**
 * Colors reference override
 */
colors = {
    ...colors,
    aliasKeys,
    statusKeys,
    getFullColor,
    getFromTheme,
    getOpacity,
    get,
    set,
};

/**
 * Exporting Everything
 */
export default colors;
