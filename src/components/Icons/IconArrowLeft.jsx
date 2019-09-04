/* Packages */
import React from 'react';

/* Icon */
const IconArrowLeft = (props) => {
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
            <path
                id="aph-icon-arrow-left-path"
                fill="none"
                fillRule="evenodd"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M18 8l-8 7 8 7"
            />
        </svg>
    );
};

/* Exporting Component */
export default IconArrowLeft;
