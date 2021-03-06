import React from 'react';
import { getFilteredProps } from './settings';

const IconTicketbooth = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
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
                    className="aph-icon-fill">
                    <use
                        xlinkHref="#aph-icon-defs-path-ticketbooth"
                    />
                </mask>
                <use

                    id="aph-icon-use-ticketbooth"
                    className="aph-icon-fill"
                    xlinkHref="#aph-icon-defs-path-ticketbooth"
                    transform="translate(15.000000, 15.000000) rotate(-45.000000) translate(-15.000000, -15.000000)"
                />
            </g>
        </svg>
    );
};

export default IconTicketbooth;
