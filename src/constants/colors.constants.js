/* Color Base */
const _COLORS = {
    DARK_BLACK: 'rgb(0, 0, 0)',         // #000000
    BLACK     : 'rgb(45, 45, 45)',      // #2D2D2D

    WHITE     : 'rgb(255, 255, 255)',   // #FFFFFF
    SMOKE     : 'rgb(248, 248, 248)',   // #F8F8F8
    DARK_SMOKE: 'rgb(242, 242, 242)',   // #F2F2F2
    GREY_SMOKE: 'rgb(238, 238, 238)',   // #EEEEEE

    LIGHT_GREY: 'rgb(212, 215, 217)',   // #D4D7D9
    GREY      : 'rgb(157, 166, 173)',   // #9DA6AD
    DARK_GREY : 'rgb(122, 128, 133)',   // #7A8085

    YELLOW      : 'rgb(255, 198, 30)',   // #FFC61E
    ORANGE      : 'rgb(252, 163, 17)',   // #FCA311
    ORANGE_RED  : 'rgb(255, 141, 80)',   // #FF8D50
    RED         : 'rgb(241, 51, 53)',    // #F13335
    DARK_RED    : 'rgb(196, 31, 31)',    // #C41F1F'
    GREEN       : 'rgb(96,198,89)',      // #60C659
    DARK_GREEN  : 'rgb(25, 174, 53)',    // #19AE35
    LIGHT_BLUE  : 'rgb(0, 209, 239)',    // #00D1EF
    BLUE        : 'rgb(0, 165, 219)',    // #00A5DB
    PURPLE      : 'rgb(172, 108, 184)',  // #AC6CB8
    LIGHT_PINK  : 'rgb(248, 130, 184)',  // #F882B8
};

/* Segmented Colors */
const _SEGMENTED = Object.assign({}, _COLORS, {
    PRIMARY  : _COLORS.BLUE,
    SECONDARY: _COLORS.ORANGE,

    ERROR    : _COLORS.RED,
    WARNING  : _COLORS.YELLOW,
    SUCCESS  : _COLORS.GREEN,
    INFO     : _COLORS.BLUE,

    INVERSE  : _COLORS.WHITE,
});

/* Tones */
const _TONED = Object.assign({}, _SEGMENTED, {
    TONES: {
        'DARK_BLACK': _SEGMENTED.BLACK,
        'BLACK'     : _SEGMENTED.DARK_BLACK,

        'WHITE'     : _SEGMENTED.SMOKE,
        'SMOKE'     : _SEGMENTED.LIGHT_GREY,
        'DARK_SMOKE': _SEGMENTED.GREY_SMOKE,
        'GREY_SMOKE': _SEGMENTED.LIGHT_GREY,

        'LIGHT_GREY': _SEGMENTED.GREY,
        'GREY'      : _SEGMENTED.DARK_GREY,
        'DARK_GREY' : _SEGMENTED.GREY,

        'YELLOW'      : _SEGMENTED.YELLOW,
        'ORANGE'      : _SEGMENTED.ORANGE,
        'ORANGE_RED'  : _SEGMENTED.ORANGE_RED,
        'RED'         : _SEGMENTED.DARK_RED,
        'DARK_RED'    : _SEGMENTED.RED,
        'GREEN'       : _SEGMENTED.DARK_GREEN,
        'DARK_GREEN'  : _SEGMENTED.GREEN,
        'BLUE'        : _SEGMENTED.BLUE,
        'PURPLE'      : _SEGMENTED.PURPLE,
        'LIGHT_PINK'  : _SEGMENTED.LIGHT_PINK,

        'PRIMARY'  : _SEGMENTED.PRIMARY,
        'SECONDARY': _SEGMENTED.SECONDARY,

        'ERROR'    : _SEGMENTED.ERROR,
        'WARNING'  : _SEGMENTED.WARNING,
        'SUCCESS'  : _SEGMENTED.SUCCESS,
        'INFO'     : _SEGMENTED.INFO,

        'INVERSE'  : _SEGMENTED.WHITE,
    },
});

/* Exporting */
export const COLORS = Object.assign({}, _TONED, {
    /**
     * Get an catalog color in different opacity
     * or can apply opacity to the color from param
     *
     * @return {string} selected color
     */
    GET: (color = 'BLACK', opacity = 1) => {
        if (!color || typeof color !== 'string') {
            return _TONED.BLACK;
        }

        let selected = _TONED[color.toUpperCase()];

        if (!selected && !color.includes('rgb(')) {
            return _TONED.BLACK;
        }

        if (!selected && color.includes('rgb(')) {
            selected = color;
        }

        if (!isNaN(opacity) && opacity >= 0 && opacity <= 1) {
            selected = selected.replace('rgb', 'rgba');
            selected = selected.replace(')', (`, ${opacity})`));
        }

        return selected;
    },
    /**
     * Fill
     * apply background and color
     *
     * @return {object} selected color as background
     */
    FILL: (color = 'SMOKE') => {
        if (typeof color !== 'string') {
            return {
                color     : _TONED.BLACK,
                background: _TONED.SMOKE,
            };
        }

        let _color   = color.toUpperCase();
        let selected = _TONED[_color];
        let inverse  = [
            'WHITE',
            'SMOKE',
            'DARK_SMOKE',
            'GREY_SMOKE',
            'LIGHT_GREY',
            'YELLOW',
            'WARNING',
            'INVERSE',
        ];

        if (!selected) {
            return {
                color     : _TONED.BLACK,
                background: _TONED.SMOKE,
            };
        }

        return {
            color     : (inverse.includes(_color) ? _TONED.BLACK : _TONED.WHITE),
            background: selected,
        };
    }
});
