/* Core Packages */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

/* Utilities */
import {
    gradients,
} from '../../utils';

/* Composition Components */
import Img from '../Img/Img';

/* Component Styles */
import AvatarStyled from './AvatarStyled';

/* Component Itself */
function Avatar({
    center,
    circle,
    color,
    fontSize,
    initials,
    gradient,
    margin,
    name,
    size,
    width,
    height,
    styles,
    radius,
    className,
    src,
    ...rest
}) {
    /**
     * Props values
     */
    const {
        start: gStart,
        end  : gEnd,
    } = (gradient || {});

    /**
     * Get a random gradient value
     */
    const gradientOptional = (gradients.palette[color] || gradients.random() || {});
    const gradientSelected = ((gStart || gEnd) ? {
        start: (gStart || gEnd),
        end  : (gEnd || gStart),
    } : gradientOptional);

    /**
     * Local values
     */
    const hasName     = ((name && !initials) ? true : false);
    const splitted    = ((name || '').trim().split(' '));
    const first       = (('' + splitted[0]));
    const last        = (('' + splitted[(splitted.length - 1) || 0]));
    const firstLetter = (!hasName ? '' : first[0]);
    const lastLetter  = (!hasName ? '' : last[0]);
    const colorStart  = gradientSelected.start;
    const colorEnd    = gradientSelected.end;
    const [ display, setDisplay ] = useState(src ? false : true);

    /**
     * Handle error
     */
    function handleError() {
        if (display) {
            return;
        }

        setDisplay(true);
    }

    /**
     * Did update
     */
    useEffect(() => {
        setDisplay(src ? false : true);
    }, [ src ]);

    /**
     * Display simple image
     */
    if (!display) {
        return (
            <Img
                src={src}
                width={(width || size) + 'px'}
                height={(height || size) + 'px'}
                circle={circle}
                margin={margin}
                radius={radius}
                className={className}
                onError={handleError}
                fadeIn={true}
                styles={{
                    ...(styles || {}),
                    ...(!center ? {} : {
                        display: 'block',
                        margin : '0 auto',
                    }),
                }}
                {...rest}
            />
        );
    }

    /**
     * Render
     */
    return (
        <AvatarStyled
            role="img"
            aphCenter={center}
            aphCircle={circle}
            aphFontSize={fontSize}
            aphMargin={margin}
            aphWidth={width || size}
            aphHeight={height || size}
            aphRadius={radius}
            aphStyles={styles}
            aphColorStart={colorStart}
            aphColorEnd={colorEnd}
            title={name || ''}
            className={`aph-avatar ${className}`}
            {...rest}>
            <figcaption className="aph-avatar__initials">
                {initials ? initials : (
                    <>
                        {firstLetter}{lastLetter}
                    </>
                )}
            </figcaption>
        </AvatarStyled>
    );
}

/* Default Props */
Avatar.defaultProps = {
    center   : false,
    circle   : false,
    color    : '',
    fontSize : 0,
    initials : '',
    gradient : {},
    margin   : null,
    name     : '',
    size     : 40,
    width    : null,
    height   : null,
    styles   : {},
    radius   : '',
    src      : '',
    className: '',
};

/* Props Types */
Avatar.propTypes = {
    center   : propTypes.bool,
    circle   : propTypes.bool,
    color    : propTypes.string,
    fontSize : propTypes.number,
    initials : propTypes.string,
    gradient : propTypes.object,
    margin   : propTypes.any,
    name     : propTypes.string,
    size     : propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
    ]),
    width    : propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
    ]),
    height   : propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
    ]),
    styles   : propTypes.object,
    radius   : propTypes.string,
    src      : propTypes.string,
    className: propTypes.string,
};

/* Exporting */
export default Avatar;
