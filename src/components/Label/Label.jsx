/* Core Packages */
import React from 'react';

/* Base Component */
import P from '../Typography/P/P';

/* Component Itself */
function Label(props) {
    /**
     * Render
     */
    return (
        <P
            bold
            small
            upper
            margin="5px 0"
            color="mercury"
            {...props}
        />
    );
}

/* Exporting */
export default Label;
