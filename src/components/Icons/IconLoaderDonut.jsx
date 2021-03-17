/* Core Packages */
import React from 'react';
import { getFilteredProps } from './settings';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { animations } from '../../utils';

const IconStyled = styled.svg`${animations.spin()};`;
const IconLoaderDonut = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <IconStyled {...rest} viewBox="0 0 30 30">
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
                    className="aph-icon-stroke"
                    strokeWidth="2"
                    d="M15,22.5 C19.1421356,22.5 22.5,19.1421356 22.5,15 C22.5,10.8578644 19.1421356,7.5 15,7.5 C10.8578644,7.5 7.5,10.8578644 7.5,15"
                />
            </g>
        </IconStyled>
    );
};

IconLoaderDonut.defaultProps = {
    color: 'white',
    size : 20,
};

IconLoaderDonut.propTypes = {
    color: PropTypes.string,
    size : PropTypes.number,
};

export default IconLoaderDonut;
