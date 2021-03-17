import React from 'react';
import { getFilteredProps } from './settings';

const IconOptions = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-group-options"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <path

                    id="aph-icon-path-options"
                    className="aph-icon-fill"
                    d="M7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 C8.88071187,12.5 10,13.6192881 10,15 C10,16.3807119 8.88071187,17.5 7.5,17.5 Z M15,17.5 C13.6192881,17.5 12.5,16.3807119 12.5,15 C12.5,13.6192881 13.6192881,12.5 15,12.5 C16.3807119,12.5 17.5,13.6192881 17.5,15 C17.5,16.3807119 16.3807119,17.5 15,17.5 Z M22.5,17.5 C21.1192881,17.5 20,16.3807119 20,15 C20,13.6192881 21.1192881,12.5 22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 Z"
                />
            </g>
        </svg>
    );
};

export default IconOptions;
