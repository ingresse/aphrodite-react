/* Packages */
import React from 'react';

/* Icon Itself */
const IconSignal = (props) => {
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
            <g id="Icon-/-30-/-Chart-/-White" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="bar-chart" transform="translate(8.000000, 7.000000)" stroke={color} strokeWidth="2.3">
                    <path d="M7,16 L7,6" id="Path"></path>
                    <path d="M13,16 L13,0" id="Path"></path>
                    <path d="M1,16 L1,12" id="Path"></path>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconSignal;
