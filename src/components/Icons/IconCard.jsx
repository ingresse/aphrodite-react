/* Packages */
import React from 'react';

/* Icon Itself */
const IconCard = (props) => {
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
            <g id="Icon-/-30-/-Card-/-Ocean" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="Rectangle" stroke={color} strokeWidth="2" x="3" y="7" width="24" height="16" rx="0.5"></rect>
                <rect id="Rectangle" fill={color} x="3" y="11" width="24" height="2"></rect>
                <rect id="Rectangle-Copy-4" fill="#EF3C3E" x="20" y="16" width="5" height="2"></rect>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconCard;
