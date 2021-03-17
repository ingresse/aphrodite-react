import React from 'react';
import { getFilteredProps } from './settings';

const IconFlash = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-flash-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinejoin="round">
                <polygon

                    id="aph-icon-flash-polygon"
                    className="aph-icon-stroke"
                    strokeWidth="2"
                    points="17 5 9 17 15 17 13 25 21 13 15 13"
                />
            </g>
        </svg>
    );
};

export default IconFlash;
