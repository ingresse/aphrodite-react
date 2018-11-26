/* Packages */
import React from 'react';
import styled from 'react-emotion';
import propTypes from 'prop-types';

/* Constants */
import { GRID, MEDIA_QUERIES } from '../../constants';

/* Wrapper styles */
const AphContainer = styled('div')(props => ({
    boxSizing: 'border-box',
    display  : 'block',
    margin   : '0 auto',
    padding  : `0 ${(GRID.PADDING + GRID.UNIT)}`,
    width    : '100%',

    maxWidth : (
        (props.fluid ? '100%' :
            (props.xs ? (GRID.CONTAINER.XS + GRID.UNIT) :
                (props.sm ? (GRID.CONTAINER.SM + GRID.UNIT) :
                    (props.md ? (GRID.CONTAINER.MD + GRID.UNIT) :
                        (props.xl ? (GRID.CONTAINER.XL + GRID.UNIT) :
                            (GRID.CONTAINER.LG + GRID.UNIT)
                        )
                    )
                )
            )
        )
    ),

    [MEDIA_QUERIES.LT.SM]: {
        padding: ((GRID.PADDING - 5) + GRID.UNIT),
    },
}));

/* Component it self */
const Container = (props) => {
    return (
        <AphContainer
            {...props}
            className={`aph-container ${props.className || ''}`}>
            {props.children}
        </AphContainer>
    );
};

/* Properties Types */
Container.propTypes = {
    xs   : propTypes.bool,
    sm   : propTypes.bool,
    md   : propTypes.bool,
    lg   : propTypes.bool,
    xl   : propTypes.bool,
    fluid: propTypes.bool,
};

/* Exporting */
export default Container;
