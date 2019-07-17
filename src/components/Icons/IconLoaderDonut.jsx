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
    const { color, size } = props;

    return (
        <IconStyled
             xmlns="http://www.w3.org/2000/svg"
             width={`${size}px`}
             height={`${size}px`}
             viewBox="0 0 20 20">
            <path
                fill="none"
                fillRule="evenodd"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9.5 17.5A7.5 7.5 0 1 0 2 10"
            />
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
