/* Packages */
import React from 'react';

/* Icon Itself */
const IconCharLine = (props) => {
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
            <g id="Icon-/-30-/-Chart-/-White" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="chart-bar-regular" transform="translate(5.000000, 7.000000)" fill={color} fillRule="nonzero">
                    <path d="M16.275,11.8125 L17.19375,11.8125 C17.45625,11.8125 17.71875,11.55 17.71875,11.2875 L17.71875,1.8375 C17.71875,1.575 17.45625,1.3125 17.19375,1.3125 L16.275,1.3125 C16.0125,1.3125 15.75,1.575 15.75,1.8375 L15.75,11.2875 C15.75,11.55 16.0125,11.8125 16.275,11.8125 Z M8.4,11.8125 L9.31875,11.8125 C9.58125,11.8125 9.84375,11.55 9.84375,11.2875 L9.84375,3.15 C9.84375,2.8875 9.58125,2.625 9.31875,2.625 L8.4,2.625 C8.1375,2.625 7.875,2.8875 7.875,3.15 L7.875,11.2875 C7.875,11.55 8.1375,11.8125 8.4,11.8125 L8.4,11.8125 Z M12.3375,11.8125 L13.25625,11.8125 C13.51875,11.8125 13.78125,11.55 13.78125,11.2875 L13.78125,5.775 C13.78125,5.5125 13.51875,5.25 13.25625,5.25 L12.3375,5.25 C12.075,5.25 11.8125,5.5125 11.8125,5.775 L11.8125,11.2875 C11.8125,11.55 12.075,11.8125 12.3375,11.8125 L12.3375,11.8125 Z M20.34375,13.78125 L1.96875,13.78125 L1.96875,0.65625 C1.96875,0.293671875 1.67507813,0 1.3125,0 L0.65625,0 C0.293671875,0 0,0.293671875 0,0.65625 L0,14.4375 C0,15.1622461 0.587753906,15.75 1.3125,15.75 L20.34375,15.75 C20.7063281,15.75 21,15.4563281 21,15.09375 L21,14.4375 C21,14.0749219 20.7063281,13.78125 20.34375,13.78125 Z M4.4625,11.8125 L5.38125,11.8125 C5.64375,11.8125 5.90625,11.55 5.90625,11.2875 L5.90625,8.4 C5.90625,8.1375 5.64375,7.875 5.38125,7.875 L4.4625,7.875 C4.2,7.875 3.9375,8.1375 3.9375,8.4 L3.9375,11.2875 C3.9375,11.55 4.2,11.8125 4.4625,11.8125 L4.4625,11.8125 Z" id="Shape"></path>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconCharLine;
