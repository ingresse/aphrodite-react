import React from 'react';
import { getFilteredProps } from './settings';

const IconInfoCircle = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <defs>
                <path id="a" d="M27 13.499c0 7.457-6.046 13.5-13.5 13.5-7.458 0-13.5-6.043-13.5-13.5C0 6.044 6.042 0 13.5 0 20.954 0 27 6.044 27 13.499z"/>
                <mask id="b" width="30" height="29.999" x="-1.5" y="-1.5">
                    <path fill="#fff" d="M-1.5-1.5h30v29.999h-30z"/>
                    <use xlinkHref="#a"/>
                </mask>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(1.5 1.5)">
                <use className="aph-icon-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" mask="url(#b)" xlinkHref="#a"/>
                <g transform="matrix(1 0 0 -1 12 20)">
                    <path className="aph-icon-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.5.5v8"/>
                    <circle cx="1.5" cy="12" r="1" className="aph-icon-fill"/>
                </g>
            </g>
        </svg>
    );
};

export default IconInfoCircle;
