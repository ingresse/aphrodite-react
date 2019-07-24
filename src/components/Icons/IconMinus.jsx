/* Packages */
import React from 'react';

/* Icon Itself */
const IconMinus = (props) => {
    /**
     * Inherit props
     */
    const {
        size,
        width,
        height,
        color
    } = props;

    /**
     * Render
     */
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={(width || size)}
             height={(height || size)}
             viewBox="0 0 30 30">
            <g 
                id="aph-icon-group-minus"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <rect
                    id="aph-icon-rect-minus"
                    fill={color}
                    rx="2.5"
                    x="12.5"
                    y="5"
                    width="5" 
                    height="20"
                    transform="translate(15.000000, 15.000000) rotate(-270.000000) translate(-15.000000, -15.000000) "
                />
            </g>
        </svg>
    );
};

/* Exporting */
export default IconMinus;
