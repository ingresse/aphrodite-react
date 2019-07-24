/* Packages */
import React from 'react';

/* Icon Itself */
const IconFlashOff = (props) => {
    /**
     * Inherit props
     */
    const {
        size,
        width,
        height,
        color
    } = props;

    /**
     * Render
     */
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={(width || size)}
             height={(height || size)}
             viewBox="0 0 30 30">
            <g
                id="aph-icon-flash-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <polygon
                    id="aph-icon-flash-polygon"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinejoin="round"
                    points="17 5 9 17 15 17 13 25 21 13 15 13"
                />
                <path
                    id="aph-icon-flash-path"
                    d="M6,6 L24,24"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
};

/* Exporting */
export default IconFlashOff;
