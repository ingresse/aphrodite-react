/* Packages */
import React from 'react';

/* Icon Itself */
const IconItems = (props) => {
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
            <g id="Tab-Destaques-/-Normal" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Eventos" transform="translate(2.000000, 0.500000)">
                    <rect id="Rectangle-Copy-3" stroke={color} strokeWidth="1.5" transform="translate(7.000000, 12.000000) rotate(-270.000000) translate(-7.000000, -12.000000) " x="-4.75" y="4.25" width="23.5" height="15.5" rx="1.05"></rect>
                    <rect id="Rectangle-Copy-3" fill={color} transform="translate(18.000000, 11.950000) rotate(-270.000000) translate(-18.000000, -11.950000) " x="7" y="11.2" width="22" height="1.5" rx="0.75"></rect>
                    <rect id="Rectangle-Copy-5" fill={color} transform="translate(21.000000, 11.750000) rotate(-270.000000) translate(-21.000000, -11.750000) " x="12" y="11" width="18" height="1.5" rx="0.75"></rect>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconItems;
