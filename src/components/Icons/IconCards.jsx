/* Packages */
import React from 'react';

/* Icon Itself */
const IconCards = (props) => {
    /**
     * Inherit props
     */
    const {
        size,
        width,
        height,
        color
    } = props;

    /**
     * Render
     */
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={(width || size)}
             height={(height || size)}
             viewBox="0 0 30 30">
            <g id="Icon-/-30-/-Cards" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(2.000000, 5.300000)">
                    <g id="Cards" transform="translate(0.000000, 1.000000)">
                        <g id="Card-1">
                            <path d="M1,-0.75 L15,-0.75 C15.5983085,-0.75 16.0833333,-0.264975146 16.0833333,0.333333333 L16.0833333,7.24831355 L11.1641099,7.24831355 C10.473754,7.24831355 9.91410993,7.80795762 9.91410993,8.49831355 L9.91410993,10.0833333 L1,10.0833333 C0.401691521,10.0833333 -0.0833333333,9.59830848 -0.0833333333,9 L-0.0833333333,0.333333333 C-0.0833333333,-0.264975146 0.401691521,-0.75 1,-0.75 Z" id="Rectangle" stroke={color} strokeWidth="1.5"></path>
                            <rect id="Rectangle" fill={color} x="0" y="2" width="16" height="1.5"></rect>
                        </g>
                        <g id="Card-2" transform="translate(10.000000, 8.000000)">
                            <rect id="Rectangle" stroke={color} strokeWidth="1.5" x="-0.0833333333" y="-0.75" width="16.1666667" height="10.8333333" rx="0.333333333"></rect>
                            <rect id="Rectangle" fill={color} x="0" y="2" width="16" height="1.5"></rect>
                        </g>
                    </g>
                    <g id="Arrows" transform="translate(1.500000, 0.000000)">
                        <g id="Arrow-1" transform="translate(16.000000, 0.000000)">
                            <path d="M1.75851811,5.41421356 L1.5,5.41421356 C1.22385763,5.41421356 1,5.19035594 1,4.91421356 L1,1.5 C1,1.22385763 1.22385763,1 1.5,1 L4.91421356,1 C5.19035594,1 5.41421356,1.22385763 5.41421356,1.5 L5.41421356,1.75851811 C5.41421356,2.03466048 5.19035594,2.25851811 4.91421356,2.25851811 L2.75851811,2.25851811 C2.48237573,2.25851811 2.25851811,2.48237573 2.25851811,2.75851811 L2.25851811,4.91421356 C2.25851811,5.19035594 2.03466048,5.41421356 1.75851811,5.41421356 Z" id="Path-4-Copy-4" fill={color} transform="translate(3.207107, 3.207107) rotate(-45.000000) translate(-3.207107, -3.207107) "></path>
                            <polyline id="Path-9" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" points="1.53553391 3.20710678 6.82504026 3.20710678 6.82504026 5.70710678"></polyline>
                        </g>
                        <g id="Arrow-2" transform="translate(3.500000, 15.500000) scale(-1, -1) translate(-3.500000, -15.500000) translate(0.000000, 12.000000)">
                            <path d="M1.75851811,5.41421356 L1.5,5.41421356 C1.22385763,5.41421356 1,5.19035594 1,4.91421356 L1,1.5 C1,1.22385763 1.22385763,1 1.5,1 L4.91421356,1 C5.19035594,1 5.41421356,1.22385763 5.41421356,1.5 L5.41421356,1.75851811 C5.41421356,2.03466048 5.19035594,2.25851811 4.91421356,2.25851811 L2.75851811,2.25851811 C2.48237573,2.25851811 2.25851811,2.48237573 2.25851811,2.75851811 L2.25851811,4.91421356 C2.25851811,5.19035594 2.03466048,5.41421356 1.75851811,5.41421356 Z" id="Path-4-Copy-4" fill={color} transform="translate(3.207107, 3.207107) rotate(-45.000000) translate(-3.207107, -3.207107) "></path>
                            <polyline id="Path-9" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" points="1.53553391 3.20710678 6.82504026 3.20710678 6.82504026 5.70710678"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconCards;
