/* Packages */
import React from 'react';

/* Icon */
const IconQuestionCircle = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={props.size}
             height={props.size}
             viewBox="0 0 30 30">
            <defs>
                <path id="a" d="M27 13.5c0 7.458-6.043 13.501-13.5 13.501C6.045 27.001 0 20.958 0 13.5 0 6.044 6.045 0 13.5 0 20.957 0 27 6.044 27 13.5z"/>
                <mask id="b" width="30" height="30.001" x="-1.5" y="-1.5">
                    <path fill="#fff" d="M-1.5-1.5h30v30.001h-30z"/>
                    <use xlinkHref="#a"/>
                </mask>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(1.5 1.5)">
                <use stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" mask="url(#b)" xlinkHref="#a"/>
                <g transform="translate(10 7)">
                    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.041 9.715c0-.718-.185-1.031.39-1.55 1.18-1.068 3.596-2.319 3.596-4.437C7.027-.609.603-.217.603 3.042"/>
                    <circle cx="3" cy="13" r="1" fill={props.color}/>
                </g>
            </g>
        </svg>
    );
};

/* Exporting Component */
export default IconQuestionCircle;
