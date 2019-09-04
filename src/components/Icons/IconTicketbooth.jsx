/* Packages */
import React from 'react';

/* Icon Itself */
const IconTicketbooth = (props) => {
    /**
     * Inherit props
     */
    const {
        size,
        width,
        height,
        color,
        className,
    } = props;

    /**
     * Render
     */
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={(width || size)}
            height={(height || size)}
            viewBox="0 0 30 30">
            <defs>
                <path
                    id="aph-icon-defs-path-ticketbooth"
                    d="M6,9 L24,9 C24.5522847,9 25,9.44771525 25,10 L25,13 C23.6666667,13.0001869 23,13.6668536 23,15 C23,16.3331464 23.6666667,16.9998131 25,17 L25,20 C25,20.5522847 24.5522847,21 24,21 L6,21 C5.44771525,21 5,20.5522847 5,20 L5,17 C6.33333333,16.9998131 7,16.3331464 7,15 C7,13.6668536 6.33333333,13.0001869 5,13 L5,10 C5,9.44771525 5.44771525,9 6,9 Z"
                />
            </defs>
            <g
                id="aph-icon-group-ticketbooth"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <mask
                    id="aph-icon-mask-ticketbooth"
                    fill={color}>
                    <use
                        xlinkHref="#aph-icon-defs-path-ticketbooth"
                    />
                </mask>
                <use
                    id="aph-icon-use-ticketbooth"
                    fill={color}
                    xlinkHref="#aph-icon-defs-path-ticketbooth"
                    transform="translate(15.000000, 15.000000) rotate(-45.000000) translate(-15.000000, -15.000000)"
                />
            </g>
        </svg>
    );
};

/* Exporting */
export default IconTicketbooth;
