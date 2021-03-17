import React from 'react';
import { getFilteredProps } from './settings';

const IconArrowDown = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-arrow-down-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline
                    className="aph-icon-stroke"
                    strokeWidth="2"
                    id="aph-icon-arrow-down-polyline"
                    points="10 12 15 17.7142857 20 12"
                />
            </g>
        </svg>
    );
};

export default IconArrowDown;
