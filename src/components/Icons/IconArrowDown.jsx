/* Packages */
import React from 'react';

/* Icon */
const IconArrowDown = (props) => {
    const { color, size, styles } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             style={styles}
             width={size}
             height={size} viewBox="0 0 30 30">
            <path
                fill="none" fillRule="evenodd"
                stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 12l5 5.714L20 12"
            />
        </svg>
    );
};

/* Exporting Component */
export default IconArrowDown;
