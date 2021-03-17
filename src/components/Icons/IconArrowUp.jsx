import React from 'react';
import { getFilteredProps } from './settings';

const IconArrowUp = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-arrow-up-group"
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
                    id="aph-icon-arrow-up-polyline"
                    transform="translate(15.000000, 14.857143) rotate(-180.000000) translate(-15.000000, -14.857143)"
                    points="10 12 15 17.7142857 20 12"
                />
            </g>
        </svg>
    );
};

export default IconArrowUp;
