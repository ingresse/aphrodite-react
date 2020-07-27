/* Core Packages */
import React from 'react';
import propTypes from 'prop-types';

/* Component Styles */
import {
    BlurBackgroundImage,
    BlurBackgroundWrapper,
} from './BlurBackgroundStyles';

/* Component Itself */
function BlurBackground({
    blur = '12px',
    children,
    image,
    opacity = 0.65,
    styles,
    wrapperStyles,
    ...rest
}) {
    /**
     * Render
     */
    return (
        <BlurBackgroundWrapper
            aphWrapperStyles={wrapperStyles}>
            <BlurBackgroundImage
                aphBlur={blur}
                aphImage={image}
                aphStyles={styles}
                aphOpacity={opacity}
                {...rest}
            />
            {children}
        </BlurBackgroundWrapper>
    );
}

/* Properties Types */
BlurBackground.propTypes = {
    /**
     * Blur radius
     */
    blur: propTypes.string,

    /**
     * Background image URL
     */
    image: propTypes.string.isRequired,

    /**
     * Blur opacity
     */
    opacity: propTypes.number,

    /**
     * Content inside
     */
    children: propTypes.any,

    /**
     * Custom image element styles
     */
    styles: propTypes.object,

    /**
     * Custom wrapper Styles
     */
    wrapperStyles: propTypes.object,
};

/* Exporting */
export default BlurBackground;
