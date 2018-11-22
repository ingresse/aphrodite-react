/* Packages */
import React from 'react';

/* Icon */
const IconTimesCircle = (props) => {
    return (
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             width={props.size}
             height={props.size}
             viewBox="0 0 20 20">
            <g id="timesGroup" stroke="none" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="timesHead" transform="translate(-875.000000, -19.000000)" stroke={props.color}>
                    <g id="timesCancel" transform="translate(870.000000, 15.000000)">
                        <path d="M20.2106667,20.2113333 C16.7313333,23.69 11.09,23.69 7.61,20.2113333 C4.13,16.7306667 4.13,11.0886667 7.61,7.61 C11.09,4.13 16.7313333,4.13 20.21,7.61 C23.6906667,11.0886667 23.6906667,16.7306667 20.2106667,20.2113333 L20.2106667,20.2113333 Z M13.91,8.79 L13.91,19.0293333 L13.91,8.79 Z M8.79066667,13.91 L19.03,13.91 L8.79066667,13.91 Z" id="times" transform="translate(15.000000, 15.000000) rotate(-315.000000) translate(-15.000000, -15.000000) "></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

/* Exporting Component */
export default IconTimesCircle;
