/* Core Packages */
import React from 'react';

/* Base Component */
import P from '../Typography/P/P';

/* Component Itself */
function Label(props) {
    /**
     * Inherit props
     */
    const {
        className,
        styles,

        ...rest
    } = props;

    /**
     * Render
     */
    return (
        <P
            bold
            small
            upper
            margin="5px 0"
            color="helper"
            as="label"
            className={`aph-label ${className || ''}`}
            styles={Object.assign({ display: 'block' }, (styles || {}))}
            {...rest}
        />
    );
}

/* Exporting */
export default Label;
