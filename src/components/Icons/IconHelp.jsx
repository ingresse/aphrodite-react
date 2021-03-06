import React from 'react';
import { getFilteredProps } from './settings';

const IconHelp = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g id="Icon-/-30-/-Help-/-Ocean" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="help-circle" transform="translate(5.000000, 5.000000)" className="aph-icon-stroke" strokeWidth="2.3">
                    <circle id="Oval" cx="10" cy="10" r="10"></circle>
                    <path d="M7.09,7 C7.57543688,5.62004444 8.98538362,4.79140632 10.4271763,5.0387121 C11.868969,5.28601788 12.9221794,6.53715293 12.9200034,8 C12.9200034,10 9.92,11 9.92,11" id="Path"></path>
                    <path d="M10,15 L10,14.5" id="Path"></path>
                </g>
            </g>
        </svg>
    );
};

export default IconHelp;
