import React from 'react';
import { getFilteredProps } from './settings';

const IconMinus = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-group-minus"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <rect

                    id="aph-icon-rect-minus"
                    className="aph-icon-fill"
                    rx="2.5"
                    x="14.5"
                    y="5"
                    width="2"
                    height="20"
                    transform="translate(15.000000, 15.000000) rotate(-270.000000) translate(-15.000000, -15.000000) "
                />
            </g>
        </svg>
    );
};

export default IconMinus;
