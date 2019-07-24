/* Packages */
import React from 'react';

/* Icon Itself */
const IconUnlock = (props) => {
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
                id="aph-icon-group-unlock"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <rect
                    id="aph-icon-rect-unlock"
                    stroke={color}
                    strokeWidth="2"
                    x="8"
                    y="14"
                    width="14"
                    height="10"
                    rx="1"
                />
                <path
                    id="aph-icon-path-unlock"
                    fill={color}
                    d="M21,10 C21,10.5522847 20.5522847,11 20,11 C19.4477153,11 19,10.5522847 19,10 C19,8.34314575 17.6568542,7 16,7 L15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 L16,5 C18.7614237,5 21,7.23857625 21,10 Z"
                />
            </g>
        </svg>
    );
};

/* Exporting */
export default IconUnlock;
