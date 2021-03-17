import React from 'react';
import { getFilteredProps } from './settings';

const IconArrowLeft = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <path
                className="aph-icon-stroke"
                id="aph-icon-arrow-left-path"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 8l-8 7 8 7"
            />
        </svg>
    );
};

export default IconArrowLeft;
