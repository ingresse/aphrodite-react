import React from 'react';
import { getFilteredProps } from './settings';

const IconPlus = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-group-plus"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <path

                    id="aph-icon-path-plus"
                    className="aph-icon-fill"
                    d="M17.5,12.5 L22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 L17.5,17.5 L17.5,22.5 C17.5,23.8807119 16.3807119,25 15,25 C13.6192881,25 12.5,23.8807119 12.5,22.5 L12.5,17.5 L7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 L12.5,12.5 L12.5,7.5 C12.5,6.11928813 13.6192881,5 15,5 C16.3807119,5 17.5,6.11928813 17.5,7.5 L17.5,12.5 Z"
                />
            </g>
        </svg>
    );
};

export default IconPlus;
