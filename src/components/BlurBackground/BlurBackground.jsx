/* Core Packages */
import React from 'react';

/* Component Styles */
import {
    BlurBackgroundImage,
    BlurBackgroundWrapper,
} from './BlurBackgroundStyles';

/* Component Itself */
function BlurBackground({
    blur,
    image,
    opacity,
    children,
    ...rest
}) {
    /**
     * Render
     */
    return (
        <BlurBackgroundWrapper
            {...rest}>
            <BlurBackgroundImage
                blur={blur}
                image={image}
                opacity={opacity}
            />
            {children}
        </BlurBackgroundWrapper>
    );
}

/* Exporting */
export default BlurBackground;
