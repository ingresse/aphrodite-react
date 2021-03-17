import React from 'react';
import { getFilteredProps } from './settings';

const IconCheckThin = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg
            {...rest}
            viewBox="0 0 20 16"
        >
            <g id="IconCheckThinWrapper"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                fillRule="evenodd"
            >
                <g id="IconCheckThinWrapperGroup"
                    transform="translate(-5.000000, -7.000000)"
                    className="aph-icon-stroke"
                    strokeWidth="4"
                    stroke={color}
                >
                    <polyline id="Path" points="7.5 14 13.5 21 23 9" />
                </g>
            </g>
        </svg>
    );
};

export default IconCheckThin;
