/* Packages */
import React from 'react';

/* Icon */
const IconArrowDown = (props) => {
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
            viewBox="0 0 30 30">
            <g
                id="aph-icon-arrow-down-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline
                    id="aph-icon-arrow-down-polyline"
                    stroke={color}
                    strokeWidth="2"
                    points="10 12 15 17.7142857 20 12"
                />
            </g>
        </svg>
    );
};

/* Exporting Component */
export default IconArrowDown;
