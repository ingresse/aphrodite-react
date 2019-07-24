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
            <g
                id="aph-icon-arrow-up-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <polyline
                    id="aph-icon-arrow-up-polyline"
                    stroke={color}
                    strokeWidth="2"
                    transform="translate(15.000000, 14.857143) rotate(-180.000000) translate(-15.000000, -14.857143)"
                    points="10 12 15 17.7142857 20 12"
                />
            </g>
        </svg>
    );
};

/* Exporting Component */
export default IconArrowUp;
