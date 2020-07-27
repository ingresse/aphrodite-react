/* Core Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* Composition */
import LayerMenu from './LayerMenu';
import LayerStatus from './LayerStatus';
import Segment from '../Segment/Segment';

/* Media */
import { MEDIA_QUERIES } from '../../constants';

const defaultClassName = 'aph-layer';

/* Composition Wrapper */
const Wrapper = styled.div`
    box-sizing: border-box;
    position  : relative;
    margin    : ${({ margin }) => margin};

    &:active,
    &:hover,
    &:focus {
        .${defaultClassName}__status {
            top   : 15%;
            bottom: 15%;
        }
    }

    .${defaultClassName} {
        padding-left: ${({ hasStatus }) => hasStatus && '45px'};
    }

    ${MEDIA_QUERIES.LT.SM} {
        .${defaultClassName} {
            padding-left: ${({ hasStatus }) => hasStatus && '35px'};
        }
    }

    ${({ styles }) => styles};
`;

/* Component Itself */
const Layer = forwardRef(({
    className,
    margin,
    menu,
    role,
    status,
    wrapperStyles,
    ...props
}, ref) => {
    const cssClass = `${className} ${defaultClassName}`;
    const wrapperProps = {
        className: cssClass.concat('-wrapper'),
        hasStatus: !!status,
        margin,
        role,
        styles: wrapperStyles,
    };

    return (
        <Wrapper
            ref={ref}
            {...wrapperProps}>
            {status && (
                <LayerStatus
                    className={cssClass.concat('__status')}
                    {...status}
                />
            )}
            <Segment
                className={cssClass}
                {...props}
            />
            {menu && (
                <LayerMenu
                    className={cssClass.concat('__menu')}
                    {...menu}
                />
            )}
        </Wrapper>
    );
});

/* Default Properties */
Layer.defaultProps = {
    className: '',
    margin: '15px 0',
    padding: '15px',
    radius: 16,
    shadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
    styles: {},
    withLink: false,
    wrapperStyles: {},
};

/* Properties Types */
Layer.propTypes = {
    /**
     * External Distance to other elements
     */
    margin: propTypes.string,

    /**
     * Internal spacement
     */
    padding: propTypes.string,

    /**
     * LayerMenu component props
     */
    menu: propTypes.object,

    /**
     * Custom border radius
     */
    radius: propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
    ]),

    /**
     * LayerStatus component props
     */
    status: propTypes.object,

    /**
     * Custom styles
     */
    styles: propTypes.object,

    /**
     * Text align
     */
    textAlign : propTypes.string,

    /**
     * Text color
     */
    textColor: propTypes.string,

    /**
     * Use it when you need a link inside, such as React Router Link
     */
    withLink: propTypes.bool,

    /**
     * Custom wrapper styles
     */
    wrapperStyles: propTypes.object,
};

/* Exporting */
export default Layer;
