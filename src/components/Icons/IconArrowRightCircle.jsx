/* Packages */
import React from 'react';

/* Icon */
const IconArrowRightCircle = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={props.size}
             height={props.size}
             viewBox="0 0 30 30">
            <defs>
                <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/>
                <mask id="b" width="30" height="30" x="-1.5" y="-1.5">
                    <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/>
                    <use xlinkHref="#a"/>
                </mask>
            </defs>
            <g fill="none" fillRule="evenodd" stroke={props.color} strokeLinecap="round" strokeLinejoin="round" transform="translate(1.5 1.5)">
                <use strokeWidth="3" mask="url(#b)" xlinkHref="#a"/>
                <path strokeWidth="1.5" d="M12 17.988l4.495-4.495L12 9"/>
            </g>
        </svg>
    );
};

/* Exporting Component */
export default IconArrowRightCircle;
