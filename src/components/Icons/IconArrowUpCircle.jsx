/* Packages */
import React from 'react';

/* Icon */
const IconArrowUpCircle = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={props.size}
             height={props.size}
             viewBox="0 0 30 30">
            <defs>
                <path d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z" id="a" />
                <mask y="-1.5" x="-1.5" height="30" width="30" id="b">
                    <path id="path8" d="M-1.5-1.5h30v30h-30z" fill="#fff" />
                    <use id="use10" xlinkHref="#a" />
                </mask>
            </defs>
            <g transform="matrix(-1 0 0 1 28.5 1.5)" strokeLinejoin="round" strokeLinecap="round" stroke={props.color} fillRule="evenodd" fill="none">
                <use strokeWidth="2" xlinkHref="#a" mask="url(#b)" />
                <path strokeWidth="1.5" d="m 17.993999,15.743696 -4.495,-4.495 -4.4929997,4.495" />
            </g>
        </svg>
    );
};

/* Exporting Component */
export default IconArrowUpCircle;
