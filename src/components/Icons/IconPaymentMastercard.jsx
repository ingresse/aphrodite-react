import React from 'react';
import { getFilteredProps } from './settings';

const IconPaymentMastercard = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <rect id="path-1" x="0" y="4" width="30" height="22.5" rx="2"></rect>
            </defs>
            <g id="Pagamento-/-Master" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1"></use>
                </mask>
                <use id="Fundo" fill="#2D2D2D" xlinkHref="#path-1"></use>
                <g id="Master" mask="url(#mask-2)">
                    <g transform="translate(3.500000, 8.500000)">
                        <ellipse id="Oval" fill="#EE0005" cx="6.93714953" cy="6.74795455" rx="6.93714953" ry="6.74795455" />
                        <ellipse id="Oval" fill="#F9A000" cx="15.5560164" cy="6.74795455" rx="6.93714953" ry="6.74795455" />
                        <path d="M8.61897196,6.74785227 C8.61897196,8.89046591 9.64577103,10.799642 11.2466355,12.0357102 C12.8474474,10.7995909 13.8742991,8.89046591 13.8742991,6.74785227 C13.8742991,4.60523864 12.8475,2.6960625 11.2466355,1.45999432 C9.6458236,2.69616477 8.61897196,4.60528977 8.61897196,6.74785227 Z" id="Path" fill="#FF6300" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default IconPaymentMastercard;
