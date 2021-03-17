import React from 'react';
import { getFilteredProps } from './settings';

const IconLock = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-lock-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <rect

                    className="aph-icon-stroke"
                    id="aph-icon-lock-rect"
                    strokeWidth="2"
                    x="8"
                    y="14"
                    width="14"
                    height="10"
                    rx="1"
                />
                <path

                    className="aph-icon-fill"
                    id="aph-icon-lock-path"
                    d="M9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 C18.3137085,5 21,7.6862915 21,11 L21,13 L19,13 L19,11 C19,8.790861 17.209139,7 15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 Z"
                />
            </g>
        </svg>
    );
};

export default IconLock;
