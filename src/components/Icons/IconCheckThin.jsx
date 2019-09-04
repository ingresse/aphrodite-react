/* Packages */
import React from 'react';

/* Icon */
const IconCheckThin = (props) => {
    /**
     * Inherit props
     */
    const {
        size,
        width,
        height,
        color,
        className,
    } = props;

    /**
     * Render
     */
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={(width || size)}
            height={(height || size)}
            viewBox="0 0 20 16">
            <g id="IconCheckThinWrapper"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                fillRule="evenodd">
                <g id="IconCheckThinWrapperGroup"
                    transform="translate(-5.000000, -7.000000)"
                    stroke={color}
                    strokeWidth="4">
                    <polyline id="Path" points="7.5 14 13.5 21 23 9"></polyline>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconCheckThin;
