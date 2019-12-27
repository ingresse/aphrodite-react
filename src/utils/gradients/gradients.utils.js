/* Utilities */
import colors from '../colors/colors.utils';

/**
 * Grandrients palette
 */
const palette = {
    tangerine: {
        start: colors.shades.tangerine.light,
        end  : colors.shades.tangerine.dark,
    },
    ocean    : {
        start: colors.shades.ocean.light,
        end  : colors.shades.ocean.dark,
    },
    bamboo   : {
        start: colors.shades.bamboo.light,
        end  : colors.shades.bamboo.dark,
    },
    sunflower: {
        start: colors.shades.sunflower.light,
        end  : colors.shades.sunflower.dark,
    },
    ruby     : {
        start: colors.shades.ruby.light,
        end  : colors.shades.ruby.dark,
    },
    supernova: {
        start: colors.shades.supernova.light,
        end  : colors.shades.supernova.dark,
    },
    mint     : {
        start: colors.shades.mint.light,
        end  : colors.shades.mint.dark,
    },
    poison   : {
        start: colors.shades.poison.light,
        end  : colors.shades.poison.dark,
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
