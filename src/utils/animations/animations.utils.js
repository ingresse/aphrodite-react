/* Core Packages */
import { css, keyframes } from '@emotion/core';

/**
 * Animations Utils
 */
const spin = (speed = '0.75s') => {
    const animation = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    `;

    return css`
        animation: ${animation} ${speed} linear infinite;
    `;
};

/* Mapping */
const animations = {
    spin,
};

/* Exporting */
export default animations;
