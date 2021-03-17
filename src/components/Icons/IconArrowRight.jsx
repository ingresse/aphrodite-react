import React from 'react';
import { getFilteredProps } from './settings';

const IconArrowRight = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <path
                className="aph-icon-stroke"
                id="aph-icon-arrow-right-path"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 22l8-7-8-7"
            />
        </svg>
    );
};

export default IconArrowRight;
