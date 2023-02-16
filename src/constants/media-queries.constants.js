/* Constants */
import { SCREEN_SIZES } from './screen-sizes.constants';

/* Media Queries */
export const MEDIA_QUERIES = {
    PRINT: '@media print',

    XXS: `@media (max-width: ${SCREEN_SIZES.XS - 1}px)`,
    XS : `@media (min-width: ${SCREEN_SIZES.XS}px) and (max-width: ${SCREEN_SIZES.XSM - 1}px)`,
    XSM: `@media (min-width: ${SCREEN_SIZES.XSM}px) and (max-width: ${SCREEN_SIZES.SM - 1}px)`,
    SM : `@media (min-width: ${SCREEN_SIZES.SM}px) and (max-width: ${SCREEN_SIZES.MD - 1}px)`,
    MD : `@media (min-width: ${SCREEN_SIZES.MD}px) and (max-width: ${SCREEN_SIZES.LG - 1}px)`,
    LG : `@media (min-width: ${SCREEN_SIZES.LG}px) and (max-width: ${SCREEN_SIZES.XL - 1}px)`,
    XL : `@media (min-width: ${SCREEN_SIZES.XL}px)`,

    // LESS THAN
    LT: {
        XS : `@media (max-width: ${SCREEN_SIZES.XS - 1}px)`,
        XSM: `@media (max-width: ${SCREEN_SIZES.XSM - 1}px)`,
        SM : `@media (max-width: ${SCREEN_SIZES.SM - 1}px)`,
        MD : `@media (max-width: ${SCREEN_SIZES.MD - 1}px)`,
        LG : `@media (max-width: ${SCREEN_SIZES.LG - 1}px)`,
    },

    // GREATER THAN
    GT: {
        XXS: `@media (min-width: 1px)`,
        XS : `@media (min-width: ${SCREEN_SIZES.XS}px)`,
        XSM: `@media (min-width: ${SCREEN_SIZES.XSM}px)`,
        SM : `@media (min-width: ${SCREEN_SIZES.SM}px)`,
        MD : `@media (min-width: ${SCREEN_SIZES.MD}px)`,
        LG : `@media (min-width: ${SCREEN_SIZES.LG}px)`,
        XL : `@media (min-width: ${SCREEN_SIZES.XL}px)`,
    },
};
