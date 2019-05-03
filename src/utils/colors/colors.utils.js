/**
 * Utilities: Colors
 */


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

const ocean     = getShadesFormat(
    'rgb(0, 134, 201)',
    'rgb(0, 165, 219)',
    'rgb(0, 192, 232)',
    'rgb(191, 232, 246)'
);

const mercury   = getShadesFormat(
    'rgb(90, 96, 101)',
    'rgb(122, 128, 133)',
    'rgb(152, 159, 163)',
    'rgb(221, 223, 224)'
);

const bamboo    = getShadesFormat(
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

const ruby      = getShadesFormat(
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

const mint      = getShadesFormat(
    'rgb(38, 168, 134)',
    'rgb(60, 194, 165)',
    'rgb(83, 215, 192)',
    'rgb(206, 239, 232)'
);

const oil       = getShadesFormat(
    'rgb(27, 27, 27)',
    'rgb(45, 45, 45)',
    'rgb(64, 64, 64)',
    'rgb(202, 202, 202)'
);

let shades = {
    tangerine,
    ocean,
    mercury,
    bamboo,
    sunflower,
    ruby,
    supernova,
    mint,
    oil,
};


/**
 * Default Colors
 */
let stock = {
    tangerine: tangerine.original,
    ocean    : ocean.original,
    mercury  : mercury.original,
    bamboo   : bamboo.original,
    sunflower: sunflower.original,
    ruby     : ruby.original,
    supernova: supernova.original,
    mint     : mint.original,
    oil      : oil.original,

    smoke    : 'rgb(248, 248, 248)',
    white    : 'rgb(255, 255, 255)',
    black    : 'rgb(0, 0, 0)',
};


/**
 * Colors Alias
 */
let alias = {
    primary  : tangerine,
    secondary: ocean,

    info     : supernova,
    success  : bamboo,
    warning  : sunflower,
    error    : ruby,
};


/**
 * All Colors
 */
let all = {
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
 * @param {string} RGBA Color
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
    const selected = (all.shades[color] ? all.shades[color][shade] : all[color]);

    if (typeof color !== 'string' || !selected) {
        return getOpacity(opacity);
    }

    return getOpacity(opacity, selected);
};


/**
 * Colors reference
 */
let colors = {
    ...all,

    getOpacity,
    get,
};


/**
 * Set Colors
 *
 * @param {string} colorKey
 * @param {string} shadeDark
 * @param {string} shadeOriginal
 * @param {string} shadeLight
 * @param {string} shadeCrystal
 *
 * @param {boolean} Operation Status
 */
const set = (colorKey, shadeDark, shadeOriginal, shadeLight, shadeCrystal) => {
    if (typeof colorKey !== 'string' ||
        typeof shadeDark !== 'string' ||
        typeof shadeOriginal !== 'string' ||
        typeof shadeLight !== 'string' ||
        typeof shadeCrystal !== 'string') {
        return false;
    }

    colors = {
        ...colors,

        shades: {
            ...colors.shades,
            [colorKey]: getShadesFormat(shadeDark, shadeOriginal, shadeLight, shadeCrystal),
        },
    };

    return true;
};


/**
 * Colors reference override
 */
colors = {
    ...colors,

    set,
};


/**
 * Exporting Everything
 */
export default colors;