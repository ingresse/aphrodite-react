import React from 'react';
import { getFilteredProps } from './settings';

const IconCheck = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 13 11">
            <g className="aph-icon-fill" fillRule="evenodd">
                <path d="M3.291 3.462L6.54 6.71a.998.998 0 0 1-.009 1.418L5.13 9.528a1.008 1.008 0 0 1-1.42.009L.463 6.291a.998.998 0 0 1 .01-1.42l1.4-1.4a1.008 1.008 0 0 1 1.42-.009z" />
                <path d="M11.893 2.115c.394.394.4 1.028.01 1.417l-6.37 6.37a.997.997 0 0 1-1.418-.01l-1.401-1.4a1.002 1.002 0 0 1-.01-1.418l6.37-6.37a.997.997 0 0 1 1.418.01l1.4 1.4z" />
            </g>
        </svg>
    );
};

export default IconCheck;
