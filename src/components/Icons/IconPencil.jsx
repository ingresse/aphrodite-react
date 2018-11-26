/* Packages */
import React from 'react';

/* Icon */
const IconPencil = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 15 15"
             width={props.size}
             height={props.size}>
            <g fill="none"
               fillRule="evenodd"
               stroke="none"
               strokeWidth="1"
               strokeLinecap="round"
               strokeLinejoin="round">
                <path stroke={props.color}
                      strokeWidth="1.1375"
                      d="M11.1597456,1 L1.98241676,10.1758698 L1,14 L4.82364385,13.0161242 L14,3.83976805 L11.1597456,1 L11.1597456,1 Z M1.98241676,10.2750842 L4.6676806,12.8927224 L1.98241676,10.2750842 Z">
                </path>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconPencil;
