/* Packages */
import React, { useEffect, useState, forwardRef } from 'react';
import propTypes from 'prop-types';

/* Component styles */
import ImgStyled from './ImgStyled';

/* Component Itself */
const Img = forwardRef((props, ref) => {
    const {
        center,
        src,
        srcFallback,
        className,
        onError,
        onLoad,
        fadeIn,
        ...rest
    } = props;
    /**
     * Local values
     */
    const [ managedSRC, setManagedSRC ] = useState(src);
    const [ appliedSRC, setAppliedSRC ] = useState(false);
    const [ activeFade, setActiveFade ] = useState(fadeIn ? true : false);

    /**
     * Handle with load
     *
     * @param {object} evt - synthetic event
     */
    function handleLoad(evt) {
        if (typeof onLoad === 'function') {
            onLoad({
                ...(evt || {}),
            });
        }

        if (!activeFade) {
            return;
        }

        setActiveFade(false);
    }

    /**
     * Handle with error
     *
     * @param {object} errorEvt - error synthetic event
     */
    function handleError(errorEvt) {
        if (!appliedSRC && srcFallback &&
            (typeof srcFallback === 'string')) {
            setAppliedSRC(true);
            setManagedSRC(srcFallback);
        }

        if (typeof onError === 'function') {
            onError({
                ...(errorEvt || {}),
            });
        }
    }

    /**
     * Did update
     */
    useEffect(() => {
        setManagedSRC(src);
    }, [ src ]);

    /**
     * Render
     */
    return (
        <ImgStyled
            as="img"
            {...rest}
            center={center}
            ref={ref}
            src={managedSRC}
            onLoad={handleLoad}
            onError={handleError}
            withFadeIn={fadeIn}
            className={`aph-img${activeFade ? ' aph-img--fade-in ' : ' '}${className || ''}`}
        />
    );
});

/* Default Properties */
Img.defaultProps = {
    circle : false,
    rounded: false,

    /**
     * Simple opacity transition on load image source
     */
    fadeIn: false,

    radius     : '',
    maxWidthXS : '',
    srcFallback: '',

    styles    : {},
};

/* Properties Types */
Img.propTypes = {
    circle : propTypes.bool,
    rounded: propTypes.bool,
    fadeIn : propTypes.bool,

    radius     : propTypes.string,
    maxWidthXS : propTypes.string,
    srcFallback: propTypes.string,

    styles    : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
};

/* Exporting */
export default Img;
