/* Packages */
import React from 'react';

/* Icon */
const IconArrowLeft = (props) => {
    const { color, size, styles } = props;

    return (
        <svg
            style={styles}
            width={size}
            height={size}
            viewBox="0 0 30 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
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
