/* Packages */
import React from 'react';

/* Icon */
const IconCheckThin = (props) => {
    const { color, size } = props;
    return (
        <svg viewBox="0 0 20 16"
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg">
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
