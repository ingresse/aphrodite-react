import React from 'react';
import { getFilteredProps } from './settings';

const IconSearch = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="IconSearchGroup"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle

                    className="aph-icon-stroke"
                    id="IconSearchCircle"
                    strokeWidth="2"
                    cx="12.5"
                    cy="12.9"
                    r="6"
                />
                <path

                    className="aph-icon-stroke"
                    d="M17.5,17.9 L23,23.4"
                    id="IconSearchLiner"
                    strokeWidth="2"
                />
            </g>
        </svg>
    );
}

/* Exporting Icon */
export default IconSearch;
