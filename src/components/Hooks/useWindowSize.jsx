import { useState, useEffect } from 'react';

/* Constants */
import { LAYOUT, SCREEN_SIZES } from '../../constants';

/* Hook */
function useWindowSize() {
    const isClient = typeof window === 'object';

    /**
     * Get Window Size
     */
    function getSize() {
        const _window = isClient ? window : {};

        const width  = (_window.innerWidth);
        const height = (_window.innerHeight);
        const xs     = (width <= SCREEN_SIZES.SM);
        const sm     = (width >= SCREEN_SIZES.SM && width < SCREEN_SIZES.MD);
        const md     = (width >= SCREEN_SIZES.MD && width < SCREEN_SIZES.LG);
        const lg     = (width >= SCREEN_SIZES.LG && width < SCREEN_SIZES.XL);
        const xl     = (width >= SCREEN_SIZES.XL);

        const GTxs   = (sm || md || lg || xl);
        const GTsm   = (md || lg || xl);
        const GTmd   = (lg || xl);
        const GTlg   = (width > SCREEN_SIZES.LG);
        const GTxl   = (width > SCREEN_SIZES.XL);

        const LTxs   = xs;
        const LTsm   = xs;
        const LTmd   = (xs || sm);
        const LTlg   = (xs || sm || md);
        const LTxl   = (xs || sm || md || lg);

        return {
            width,
            height,
            xs,
            sm,
            md,
            lg,
            xl,
            _lt_: {
                xs: LTxs,
                sm: LTsm,
                md: LTmd,
                lg: LTlg,
                xl: LTxl,
            },
            _gt_: {
                xs: GTxs,
                sm: GTsm,
                md: GTmd,
                lg: GTlg,
                xl: GTxl,
            },
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
          return false;
        }

        function handleResize() {
          setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;
