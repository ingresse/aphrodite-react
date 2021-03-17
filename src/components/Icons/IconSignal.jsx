import React from 'react';
import { getFilteredProps } from './settings';

const IconSignal = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g id="Icon-/-30-/-Chart-/-White" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="bar-chart" transform="translate(8.000000, 7.000000)" className="aph-icon-stroke" strokeWidth="2.3">
                    <path d="M7,16 L7,6" id="Path"></path>
                    <path d="M13,16 L13,0" id="Path"></path>
                    <path d="M1,16 L1,12" id="Path"></path>
                </g>
            </g>
        </svg>
    );
};

export default IconSignal;
