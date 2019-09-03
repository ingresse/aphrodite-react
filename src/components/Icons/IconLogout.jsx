/* Packages */
import React from 'react';

/* Icon Itself */
const IconLogout = (props) => {
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
            <g id="Icon-/-30-/-Logout-/-White" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="log-out" transform="translate(6.000000, 6.000000)" stroke={color} strokeWidth="2.3">
                    <path d="M6,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,2 C0,0.8954305 0.8954305,0 2,0 L6,0" id="Path"></path>
                    <polyline id="Path" points="13 14 18 9 13 4"></polyline>
                    <path d="M18,9 L6,9" id="Path"></path>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconLogout;
