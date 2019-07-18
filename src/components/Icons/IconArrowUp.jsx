/* Packages */
import React from 'react';

/* Icon */
const IconArrowUp = (props) => {
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
                id="aph-icon-arrow-up-path"
                fill="none"
                fillRule="evenodd"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 17.714L15 12l-5 5.714"
            />
        </svg>
    );
};

/* Exporting Component */
export default IconArrowUp;
