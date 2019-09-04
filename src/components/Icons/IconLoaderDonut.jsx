/* Core Packages */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

/* Helpers */
import { animations } from '../../utils';

/* Icon styles */
const IconStyled = styled.svg`
    ${animations.spin()};
`;

/* Icon Itself */
const IconLoaderDonut = (props) => {
    /**
     * Inherit props
     */
    const {
        color,
        size,
        width,
        height,
        className,
    } = props;

    /**
     * Render
     */
    return (
        <IconStyled
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={(width || size)}
            height={(height || size)}
            viewBox="0 0 30 30">
            <g
                id="aph-icon-loader-group"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    id="aph-icon-loader-path"
                    stroke={color}
                    strokeWidth="4"
                    d="M15,22.5 C19.1421356,22.5 22.5,19.1421356 22.5,15 C22.5,10.8578644 19.1421356,7.5 15,7.5 C10.8578644,7.5 7.5,10.8578644 7.5,15"
                />
            </g>
        </IconStyled>
    );
};

/* Icon Default Props */
IconLoaderDonut.defaultProps = {
    color: 'white',
    size : 20,
};

/* Icon Properties Types */
IconLoaderDonut.propTypes = {
    color: PropTypes.string,
    size : PropTypes.number,
};

/* Exporting */
export default IconLoaderDonut;
