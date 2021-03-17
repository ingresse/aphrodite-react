import React from 'react';
import { getFilteredProps } from './settings';

const IconCamera = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-camera-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <path

                    d="M6,11 L8.38196601,11 C8.76073807,11 9.10700119,10.7859976 9.2763932,10.4472136 L10.7236068,7.5527864 C10.8929988,7.21400238 11.2392619,7 11.618034,7 L18.381966,7 C18.7607381,7 19.1070012,7.21400238 19.2763932,7.5527864 L20.7236068,10.4472136 C20.8929988,10.7859976 21.2392619,11 21.618034,11 L24,11 C24.5522847,11 25,11.4477153 25,12 L25,22 C25,22.5522847 24.5522847,23 24,23 L6,23 C5.44771525,23 5,22.5522847 5,22 L5,12 C5,11.4477153 5.44771525,11 6,11 Z"
                    id="aph-icon-camera-shape"
                    className="aph-icon-stroke"
                    strokeWidth="1.8"
                />
                <circle

                    className="aph-icon-stroke"
                    id="aph-icon-camera-circle"
                    strokeWidth="1.8"
                    cx="15"
                    cy="16"
                    r="4"
                />
            </g>
        </svg>
    );
};

export default IconCamera;
