/* Helper Constants */
import { COLORS, MEDIA_QUERIES, RADIUS } from './';

/* Form Constants */
export const FORM = {
    TYPES : {
        DEFAULT: [
            'text',
            'number',
            'date',
        ],
    },
    STYLES: {
        DEFAULT: {
            boxSizing: 'border-box',
            position : 'relative',
            display  : 'block',
            width    : '100%',
            height   : '40px',
            border   : 0,
            margin   : 0,
            padding  : '0 15px',

            fontSize  : '16px',
            lineHeight: '20px',

            color          : COLORS.BLACK,
            backgroundColor: COLORS.WHITE,
            borderRadius   : RADIUS,
            boxShadow      : `inset 0 0 2px 0 ${COLORS.GET('DARK_BLACK', 0.3)}`,

            '&.error': {
                boxShadow: `inset 0 0 2px 0 ${COLORS.GET('RED', 0.3)}`
            },

            '&:focus, &:active, &.error:focus, &.error:active': {
                boxShadow: `inset 0 0 2px 0 ${COLORS.GET('DARK_BLACK', 0.6)}`,
            },

            [MEDIA_QUERIES.XS]: {
                height: '50px',
            },
        },
        CHECKBOX: {
            boxSizing: 'border-box',
            position: 'absolute',
            left    : 0,
            margin  : 0,
            padding : 0,
            opacity : 0,
            width   : '20px',
            height  : '20px',

            '&:checked + .aph-form__control__mask:before': {
                backgroundColor: COLORS.BLUE,
            },
        },
        CHECKBOX_MASK: {
            boxSizing  : 'border-box',
            position   : 'relative',
            display    : 'block',
            width      : '100%',
            paddingLeft: '30px',
            userSelect : 'none',

            '&[for]': {
                cursor: 'pointer',
            },

            '&:before': {
                content : '" "',
                position: 'absolute',
                top     : '50%',
                left    : 0,
                padding : 0,
                margin  : 0,
                width   : '20px',
                height  : '20px',

                transform: 'translateY(-50%)',

                borderRadius: RADIUS.XS,

                backgroundSize    : '12px',
                backgroundRepeat  : 'no-repeat',
                backgroundPosition: 'center',
            },

            [MEDIA_QUERIES.XS]: {
                paddingLeft: '40px',

                '&:before': {
                    width : '30px',
                    height: '30px',

                    backgroundSize: '18px',
                },
            },
        },
    },
}
