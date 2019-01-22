/* Packages */
import React from 'react';

/* Icon */
const IconArrowDownCircle = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={props.size}
             height={props.size}
             viewBox="0 0 30 30">
            <defs>
                <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z" />
                <mask id="b" width="30" height="30" x="-1.5" y="-1.5">
                    <path
                        fill="#fff"
                        d="M-1.5-1.5h30v30h-30z"
                        id="path8" />
                    <use xlinkHref="#a" />
                </mask>
            </defs>
            <g fill="none" fillRule="evenodd" stroke={props.color} strokeLinecap="round" strokeLinejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)">
                <use strokeWidth="2" mask="url(#b)" xlinkHref="#a" id="use14" />
                <path strokeWidth="1.5" d="m 9.006001,12.255031 4.495,4.495 4.493,-4.495" />
            </g>
        </svg>
    );
};

/* Exporting Component */
export default IconArrowDownCircle;
