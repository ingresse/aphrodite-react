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
            xmlns="http://www.w3.org/2000/svg"
        >
        <g
            id="Icon-/-30-/-Forward-/-Mercury"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline
                id="Path-2"
                stroke={color}
                strokeWidth="4"
                points="9 11 16 19 23 11">
            </polyline>
        </g>
    </svg>
    );
};

IconArrowDown.defaultProps = {
    size: 15,
}

/* Exporting Component */
export default IconArrowDown;
