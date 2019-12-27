/* Utilities */
import colors from '../colors/colors.utils';

/**
 * Grandrients palette
 */
const palette = {
    tangerine: {
        start: colors.shades.tangerine.dark,
        end  : colors.shades.tangerine.light,
    },
    ocean    : {
        start: colors.shades.ocean.dark,
        end  : colors.shades.ocean.light,
    },
    bamboo   : {
        start: colors.shades.bamboo.dark,
        end  : colors.shades.bamboo.light,
    },
    sunflower: {
        start: colors.shades.sunflower.dark,
        end  : colors.shades.sunflower.light,
    },
    ruby     : {
        start: colors.shades.ruby.dark,
        end  : colors.shades.ruby.light,
    },
    supernova: {
        start: colors.shades.supernova.dark,
        end  : colors.shades.supernova.light,
    },
    mint     : {
        start: colors.shades.mint.dark,
        end  : colors.shades.mint.light,
    },
    mercury  : {
        start: colors.shades.mercury.dark,
        end  : colors.shades.mercury.light,
    },
    oil      : {
        start: colors.shades.oil.dark,
        end  : colors.shades.oil.light,
    },
};

/**
 * Gradients palette as list
 */
const list = Object.values(palette);

/**
 * Get random Gradient
 */
function random() {
    return list[Math.floor(Math.random() * list.length)];
}

/**
 * Mapping
 */
const gradients = {
    list,
    palette,
    random,
};

/* Exporting */
export default gradients;
