/* Packages */
import React from 'react';

/* Icon Itself */
const IconFilter = (props) => {
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
            <g id="Icon-/-30-/-Filter-/-Ocean" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(5.000000, 6.000000)" id="Path" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <polygon points="20 0 0 0 8 9.46 8 16 12 18 12 9.46"></polygon>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconFilter;
