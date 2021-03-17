import React from 'react';
import { getFilteredProps } from './settings';

const IconFilter = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g id="Icon-/-30-/-Filter-/-Ocean" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(5.000000, 6.000000)" id="Path" className="aph-icon-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <polygon points="20 0 0 0 8 9.46 8 16 12 18 12 9.46"></polygon>
                </g>
            </g>
        </svg>
    );
};

export default IconFilter;
