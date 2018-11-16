/* Packages */
import React from 'react';
import propTypes from 'prop-types';

/* Constants */
import { COLORS } from '../../constants';

const IconClose = (props) => {
    return (
        <svg width={`${props.size}px`} height={`${props.size}px`}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <g
                id="layer1"
                transform="matrix(0.70710678,0.70710678,-0.70710678,0.70710678,741.64716,-738.13245)">
                <rect
                    style={{
                        fill: props.color,
                        fillOpacity:1,
                        fillRule:'evenodd',
                        stroke:'none',
                        strokeWidth:'1px',
                        strokeLinecap:'butt',
                        strokeLinejoin:'miter',
                        strokeOpacity:1,
                    }}
                    id="rect3336"
                    width="2.0000002"
                    height="12.000004"
                    x="5"
                    y="1040.3622" />
                <rect
                    style={{
                        fill: props.color,
                        fillOpacity:1,
                        fillRule:'evenodd',
                        stroke:'none',
                        strokeWidth:'1px',
                        strokeLinecap:'butt',
                        strokeLinejoin:'miter',
                        strokeOpacity:1,
                    }}
                    id="rect3336-3"
                    width="2.0000002"
                    height="12.000004"
                    x="1045.3622"
                    y="-12.000002"
                    transform="matrix(0,1,-1,0,0,0)" />
            </g>
        </svg>
    )
}

/* Component default properties */
IconClose.defaultProps = {
    color: COLORS.WHITE,
    size : 12,
}

/* Properties Types */
IconClose.propTypes = {
    color: propTypes.string,
    size : propTypes.number,
};

/* Map State to Props */
export default IconClose;
