/* Packages */
import React from 'react';

/* Icon */
const IconArrowDown = (props) => {
    const { color, size, styles } = props;

    return (
        <svg
            style={styles}
            width={size}
            height={size}
            viewBox="0 0 30 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
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
                    strokeWidth="4"
                    points="9 11 16 19 23 11">
                </polyline>
            </g>
        </svg>
    );
};

/* Exporting Component */
export default IconArrowDown;
