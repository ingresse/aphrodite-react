/* Core Packages */
import React from 'react';

/* Base Component */
import P from '../P/P';

/* Component Itself */
function Label({
    className,
    styles,
    ...rest
}) {
    /**
     * Render
     */
    return (
        <P
            bold
            upper
            margin="5px 0"
            color="helper"
            as="label"
            textSmall
            className={`aph-label ${className || ''}`}
            styles={Object.assign({ display: 'block' }, (styles || {}))}
            {...rest}
        />
    );
}

/* Exporting */
export default Label;
