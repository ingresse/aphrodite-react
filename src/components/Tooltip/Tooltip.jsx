/* Packages */
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

/* Constants */
import { COLORS, MEDIA_QUERIES, SCREEN_SIZES } from '../../constants';

/**
 * Customized from 'react-tooltip' project:
 *
 * https://github.com/wwayne/react-tooltip
 * https://react-tooltip.netlify.com/
 */

/* Component Wrapper */
const TooltipWrapper = styled('span')(({
    place,
    style,
}) => ({
    display      : 'inline-block',
    verticalAlign: 'middle',
    lineHeight   : 0,

    '.aph-tooltip': {
        opacity: 1,
        padding: '6px 8px',

        fontSize  : '10px',
        lineHeight: '12px',
        textAlign : (place === 'right' ? 'left' : (place === 'left' ? 'right' : 'center')),

        maxWidth    : '296px',
        borderRadius: '4px',

        '&:before, &:after': {
            display: 'none !important',
        },

        '&.type-error': {
            backgroundColor: COLORS.ERROR,
        },

        '&.type-warning': {
            color          : COLORS.BLACK,
            backgroundColor: COLORS.WARNING,
        },

        '&.type-success': {
            backgroundColor: COLORS.SUCCESS,
        },

        '&.type-info': {
            backgroundColor: COLORS.INFO,
        },

        '&.type-light': {
            color          : '#212B36',
            backgroundColor: '#FFF',
            boxShadow      : '0px 0px 10px rgba(33, 43, 54, 0.1)',
            border         : '1px solid #F4F6F8',
        },

        '&__content': {
            display      : 'inline-block',
            verticalAlign: 'middle',
            minHeight    : ((style && style.height) ? style.height : null),
        },
    },

    [MEDIA_QUERIES.XS]: {
        '.aph-tooltip': {
            fontSize  : '12px',
            lineHeight: '14px',
        },
    },
}));

/* Component it self */
const Tooltip = forwardRef(({
    id,
    children,
    className,
    tip,
    ...rest
}, ref) => {
    const elId = (id || `AphTooltip${Math.random()}`);

    return (
        <TooltipWrapper
            {...rest}
            id={elId}
            ref={ref}
        >
            <span
                data-tip={tip}
                data-for={elId}
                className="aph-tooltip__content"
            >
                {children}
            </span>
            <ReactTooltip
                {...rest}
                id={elId}
                delayHide={rest.delayHide || ((window.innerWidth > SCREEN_SIZES.SM) ? 500 : 0)}
                className={`aph-tooltip${className ? ` ${className}` : ''}`}
            />
        </TooltipWrapper>
    );
});

/* Component default properties */
Tooltip.defaultProps = {
    border: false,
    effect: 'solid',
    place : 'top',
    type  : 'light',
};

/* Component properties types */
Tooltip.propTypes = {
    children : propTypes.any.isRequired,
    tip      : propTypes.any.isRequired,
    delayHide: propTypes.number,
    effect   : propTypes.string,
    place    : propTypes.string,
    type     : propTypes.string,
};

/* Exporting */
export default Tooltip;
