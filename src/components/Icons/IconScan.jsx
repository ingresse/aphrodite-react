import React from 'react';
import { getFilteredProps } from './settings';

const IconScan = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g
                id="aph-icon-group-scan"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round">
                    <polyline

                        className="aph-icon-stroke"
                        id="aph-icon-polyline-one-scan"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        points="20 5 25 5 25 10"
                    />
                    <polyline

                        className="aph-icon-stroke"
                        id="aph-icon-polyline-two-scan"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        points="5 20 10 20 10 25"
                        transform="translate(7.500000, 22.500000) rotate(-180.000000) translate(-7.500000, -22.500000)"
                    />
                    <polyline

                        className="aph-icon-stroke"
                        id="aph-icon-polyline-tree-scan"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        points="5 5 10 5 10 10"
                        transform="translate(7.500000, 7.500000) rotate(-90.000000) translate(-7.500000, -7.500000)"
                    />
                    <polyline

                        className="aph-icon-stroke"
                        id="aph-icon-polyline-four-scan"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        points="20 20 25 20 25 25"
                        transform="translate(22.500000, 22.500000) rotate(-270.000000) translate(-22.500000, -22.500000)"
                    />
                    <path

                        className="aph-icon-stroke"
                        id="aph-icon-path-scan"
                        d="M3,15 L27,15"
                        strokeWidth="2"
                    />
            </g>
        </svg>
    );
};

export default IconScan;
