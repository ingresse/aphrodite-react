import React from 'react';
import { getFilteredProps } from './settings';

const IconCard = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g id="aph-icon-card-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="aph-icon-card-group-rect-stroke" className="aph-icon-stroke" strokeWidth="2" x="3" y="7" width="24" height="16" rx="0.5"></rect>
                <rect id="aph-icon-card-group-rect-fill-1" className="aph-icon-fill" x="3" y="11" width="24" height="2"></rect>
                <rect id="aph-icon-card-group-rect-fill-2" fill="#EF3C3E" x="20" y="16" width="5" height="2"></rect>
            </g>
        </svg>
    );
};

export default IconCard;
