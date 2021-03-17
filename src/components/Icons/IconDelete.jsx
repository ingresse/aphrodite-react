import React from 'react';
import { getFilteredProps } from './settings';

const IconDelete = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-delete-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <path

                    id="aph-icon-delete-path"
                    className="aph-icon-fill"
                    d="M15,0 C23.2842712,-1.52179594e-15 30,6.71572875 30,15 C30,23.2842712 23.2842712,30 15,30 C6.71572875,30 1.01453063e-15,23.2842712 0,15 C-1.01453063e-15,6.71572875 6.71572875,1.52179594e-15 15,0 Z M24.25,18 C24.6642136,18 25,17.6642136 25,17.25 L25,13.75 C25,13.3357864 24.6642136,13 24.25,13 L5.75,13 C5.33578644,13 5,13.3357864 5,13.75 L5,17.25 C5,17.6642136 5.33578644,18 5.75,18 L24.25,18 Z"
                />
            </g>
        </svg>
    );
};

export default IconDelete;
