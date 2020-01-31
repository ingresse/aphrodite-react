/* Packages */
import React from 'react';

/* Icon Itself */
const IconFacebook = (props) => {
    /**
     * Inherit props
     */
    const {
        size,
        width,
        height,
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
            viewBox="0 0 20 20"
            id="aph-icon-facebook">
            <g
                id="aph-icon-facebook-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <g
                    id="aph-icon-facebook-group-2"
                    transform="translate(-610.000000, -110.000000)"
                    fill="#0084FF"
                    fillRule="nonzero">
                    <g
                        id="aph-icon-facebook-group-3"
                        transform="translate(610.000000, 110.000000)">
                        <path
                            id="aph-icon-facebook-path"
                            d="M9.97964286,0.041547619 C4.46809524,0.041547619 0,4.50964286 0,10.0211905 C0,14.9644048 3.59785714,19.0582143 8.3152381,19.8509524 L8.3152381,12.1032143 L5.90785714,12.1032143 L5.90785714,9.31511905 L8.3152381,9.31511905 L8.3152381,7.25928571 C8.3152381,4.87392857 9.77214286,3.57404762 11.9003571,3.57404762 C12.9196429,3.57404762 13.7955952,3.65 14.049881,3.68345238 L14.049881,6.17678571 L12.5738095,6.1775 C11.4166667,6.1775 11.1935714,6.7272619 11.1935714,7.53428571 L11.1935714,9.31369048 L13.9546429,9.31369048 L13.5945238,12.1017857 L11.1935714,12.1017857 L11.1935714,19.917619 C16.1311905,19.3166667 19.9591667,15.1185714 19.9591667,10.0183333 C19.9591667,4.50964286 15.4910714,0.041547619 9.97964286,0.041547619 Z"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconFacebook;
