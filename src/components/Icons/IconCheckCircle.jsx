/* Packages */
import React from 'react';

/* Icon */
const IconCheck = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             width={props.size}
             height={props.size}
             viewBox="0 0 30 30">
            <defs>
                <path id="a" d="M27.5 14c0 7.457-6.043 13.5-13.5 13.5S.5 21.457.5 14C.5 6.545 6.543.5 14 .5S27.5 6.545 27.5 14z" />
                <mask id="b" width="30" height="30" x="-1.5" y="-1.5">
                    <path fill="#fff" d="M-1-1h30v30H-1z" />
                    <use xlinkHref="#a" />
                </mask>
            </defs>
            <g fill="none"
               fillRule="evenodd"
               stroke={props.color}
               strokeLinecap="round"
               strokeLinejoin="round"
               transform="translate(1 1)">
                <use strokeWidth="3" mask="url(#b)" xlinkHref="#a" />
                <path strokeWidth="1.5" d="M7.808 14.149l4.291 3.994 8.821-8.554" />
            </g>
        </svg>
    );
};

/* Exporting */
export default IconCheck;
