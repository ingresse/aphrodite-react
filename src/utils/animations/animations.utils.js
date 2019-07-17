/* Core Packages */
import { css, keyframes } from '@emotion/core';

/**
 * Animations Utils
 */
const spin = (speed = '0.75s', effect = 'linear', loop = 'infinite') => {
    const animation = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    `;

    return css`
        animation: ${animation} ${speed} ${effect} ${loop};
    `;
};

/* Mapping */
const animations = {
    spin,
};

/* Exporting */
export default animations;
