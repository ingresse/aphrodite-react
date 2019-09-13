/* Packages */
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';

/* Constants */
import { GRID, MEDIA_QUERIES } from '../../constants';

/* Wrapper styles */
const AphContainer = styled('div')(props => ({
    boxSizing: 'border-box',
    display  : 'block',
    margin   : '0 auto',
    padding  :  (props.noPadding ? 0 : `0 ${(GRID.CONTAINER_PADDING + GRID.UNIT)}`),
    width    : '100%',

    maxWidth : (props.maxWidth || (
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
    )),

    [MEDIA_QUERIES.LT.SM]: {
        paddingRight: (props.noPadding ? 0 : (GRID.CONTAINER_PADDING_XS + GRID.UNIT)),
        paddingLeft : (props.noPadding ? 0 : (GRID.CONTAINER_PADDING_XS + GRID.UNIT)),
    },

    ...props.styles,
}));

/* Component it self */
const Container = forwardRef((props, ref) => {
    return (
        <AphContainer
            {...props}
            ref={ref}
            className={`aph-container ${props.className || ''}`}>
            {props.children}
        </AphContainer>
    );
});

/* Properties Types */
Container.propTypes = {
    xs    : propTypes.bool,
    sm    : propTypes.bool,
    md    : propTypes.bool,
    lg    : propTypes.bool,
    xl    : propTypes.bool,
    fluid : propTypes.bool,
    styles: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),

    noPadding: propTypes.bool,
};

/* Default Properties */
Container.defaultProps = {
    styles   : {},
    noPadding: false,
};

/* Exporting */
export default Container;
