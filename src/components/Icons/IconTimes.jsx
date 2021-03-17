import React from 'react';
import { getFilteredProps } from './settings';

const IconTimes = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-times-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <g

                    id="aph-icon-times-subgroup"
                    transform="translate(9.000000, 9.000000)"
                    className="aph-icon-stroke"
                    strokeWidth="2">
                    <path
                        id="aph-icon-times-path-one"
                        d="M0,12 L12,0 L0,12 Z"
                        transform="translate(6.000000, 6.000000) rotate(-90.000000) translate(-6.000000, -6.000000)"
                    />
                    <path
                        id="aph-icon-times-path-two"
                        d="M0,12 L12,0 L0,12 Z"
                        transform="translate(6.000000, 6.000000) rotate(-180.000000) translate(-6.000000, -6.000000)"
                    />
                </g>
            </g>
        </svg>
    );
};

export default IconTimes;
