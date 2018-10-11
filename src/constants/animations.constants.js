/* Packages */
import { keyframes } from 'react-emotion';

/* Animation Fade In Up */
const fadeInUp = keyframes`
    0% {
        opacity  : 0;
        transform: translate3d(0, 75%, 0);
    }
    100% {
        opacity  : 1;
        transform: none;
    }
`;

/* Animation Pull Up */
const pullUp = keyframes`
    0% {
        transform: scaleY(0.1);
    }

    25% {
        transform: scaleY(1);
    }

    50% {
        transform: scaleY(0.95);
    }

    100% {
        transform: scaleY(1);
    }
`;

export const ANIMATIONS = {
    FADE_IN_UP: {
        animation: `${fadeInUp} 0.75s ease`,
    },

    PULL_UP: {
        willChange     : 'transform-origin',
        animation      : `${pullUp} 0.75s ease`,
        transformOrigin: '50% 100%',
    },
}
