/* Core Packages */
import React from 'react';

/* Icon Itself */
function IconSearch (props) {

    /**
     * Inherit props
     */
    const {
        size,
        color,
    } = props;

    /**
     * Render
     */
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={size}
             height={size}
             viewBox="0 0 30 30">
            <g
                id="IconSearchGroup"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle
                    id="IconSearchCircle"
                    stroke={color}
                    strokeWidth="3.5"
                    cx="12.5"
                    cy="12.9"
                    r="6"
                />
                <path
                    d="M17.5,17.9 L23,23.4"
                    id="IconSearchLiner"
                    stroke={color}
                    strokeWidth="3.5"
                />
            </g>
        </svg>
    );
}

/* Exporting Icon */
export default IconSearch;
