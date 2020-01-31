/* Utilities */
import colors from '../colors/colors.utils';

/**
 * Grandrients palette
 */
let palette    = {};
const excluded = [
    ...colors.aliasKeys,
    ...colors.statusKeys,
    'poison',
    'translucid',
];

for (const colorKey in colors.shades) {
    const color = colors.shades[colorKey];

    if (!excluded.includes(colorKey) &&
        (typeof color === 'object') && color.light && color.dark) {
        palette[colorKey] = {
            start: color.dark,
            end  : color.light,
        };
    }
}

/**
 * Gradients palette as list
 */
const list = Object.values(palette);
const keys = Object.keys(palette);

/**
 * Get random Gradient
 */
function random() {
    return list[Math.floor(Math.random() * list.length)];
}

/**
 * Get Gradient
 */
function get(paletteShade = '') {
    return (palette[paletteShade] || null);
}

/**
 * Get CSS Linear Background
 */
function backgroundLinear(paletteShade = '', deg = 0) {
    const { start, end } = (get(paletteShade) || {});

    if (!start || !end) {
        return null;
    }

    return `linear-gradient(${deg}deg, ${start}, ${end})`;
}

/**
 * Mapping
 */
const gradients = {
    get,
    list,
    keys,
    palette,
    random,
    backgroundLinear,
};

/* Exporting */
export default gradients;
