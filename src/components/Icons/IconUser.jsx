/* Packages */
import React from 'react';

/* Icon Itself */
const IconUser = (props) => {
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
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Icon-/-30-/-Perfil-/-Mercury" stroke={color} strokeWidth="2">
                    <path d="M18.9132855,17.7160261 C21.1860415,17.7160261 23.9166399,19.3436924 25.000265,21.3295607 L25.5521812,22.3410109 C26.6411712,24.3367109 25.6766726,25.9545455 23.4031446,25.9545455 L7.59388622,25.9545455 C5.31801606,25.9545455 4.36122446,24.3268791 5.44484956,22.3410109 L5.99676577,21.3295607 C7.08575576,19.3338607 9.81519808,17.7160261 12.0837452,17.7160261 L18.9132855,17.7160261 Z M15.1904113,4 C17.8161848,4 19.952635,6.03450072 19.952635,8.53515134 L19.952635,10.7534959 C19.952635,13.2541466 17.8161848,15.2886473 15.1904113,15.2886473 C12.5647887,15.2886473 10.4284894,13.2541466 10.4284894,10.7534959 L10.4284894,8.53515134 C10.4284894,6.03450072 12.5647887,4 15.1904113,4 Z"/>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconUser;
