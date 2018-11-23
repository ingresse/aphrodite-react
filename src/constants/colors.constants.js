/* Color Base */
const _COLORS = {
    BLACK: 'rgb(45, 45, 45)',           // #2D2D2D
    WHITE: 'rgb(255, 255, 255)',        // #FFFFFF

    SMOKE     : 'rgb(248, 248, 248)',   // #F8F8F8
    DARK_SMOKE: '#F2F2F2',              // #F2F2F2
    GREY_SMOKE: 'rgb(238, 238, 238)',   // #EEEEEE

    LIGHT_GREY: 'rgb(212, 215, 217)',   // #D4D7D9
    GREY      : 'rgb(157, 166, 173)',   // #9DA6AD
    DARK_GREY : 'rgb(122, 128, 133)',   // #7A8085

    YELLOW      : 'rgb(255, 198, 30)',   // #FFC61E
    ORANGE      : 'rgb(252, 163, 17)',   // #FCA311
    ORANGE_RED  : 'rgb(255, 141, 80)',   // #FF8D50
    RED         : 'rgb(241, 51, 53)',    // #F13335
    GREEN       : 'rgb(96,198,89)',      // #60C659
    BLUE        : 'rgb(0, 165, 219)',    // #00A5DB
    PURPLE      : 'rgb(172, 108, 184)',  // #AC6CB8
    LIGHT_PINK  : 'rgb(248, 130, 184)',  // #F882B8
};

/* Export */
export const COLORS = Object.assign({}, _COLORS, {
    PRIMARY  : _COLORS.BLUE,
    SECONDARY: _COLORS.ORANGE,

    ERROR    : _COLORS.RED,
    WARNING  : _COLORS.YELLOW,
    SUCCESS  : _COLORS.GREEN,
    INFO    : _COLORS.BLUE,

    INVERSE  : _COLORS.WHITE,
});
