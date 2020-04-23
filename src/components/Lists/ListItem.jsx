/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* UI Framework Utils */
import { colors } from '../../utils';

/* Component Itself */
const AphListItemStyled = styled.li`
    box-sizing: border-box;

    display: block;
    margin : 0;
    padding: ${props => props.aphpadding};

    background-color: transparent;
    box-shadow      : ${props => ((!props.borderTop && !props.borderBottom) ? null : `inset 0 ${props.borderBottom ? '-' : ''}1px 0 0 ${colors.getOpacity(0.25, colors.getFromTheme(props, 'helper'))}`)};

    transition :
        color 0.15s linear,
        background-color 0.15s linear
    ;
    will-change:
        color,
        background-color
    ;

    &.active {
        color           : ${props => colors.getFromTheme(props, 'secondary')};
        background-color: ${props => colors.getFromTheme(props, 'secondary', 'crystal')};
    }

    ${props => (props.onClick || props.withLink) ? {
        cursor: 'pointer',
        color : colors.getFromTheme(props, 'secondary'),

        padding: (!props.withLink ? null : '0'),

        '&:hover': {
            color          : colors.getFromTheme(props, 'secondary'),
            backgroundColor: colors.getFromTheme(props, 'secondary', 'crystal'),
        },

        '.aph-list__item__link, a': {
            display: 'block',
            color  : 'inherit',
            padding: (!props.withLink ? null : props.aphpadding),
            textDecoration: 'none',
        },
    } : null};

    ${props => (props.hoverable) ? {
        '&:hover': {
            backgroundColor: colors.getOpacity(0.25, colors.getFromTheme(props, 'helper')),
        }
    } : null};

    ${props => props.styles};
`;

/* Component Itself */
const ListItem = forwardRef((props, ref) => {
    const {
        className,
        component,
        withLink,
        padding,

        ...rest
    } = props;

    const AphListItem = (component ? AphListItemStyled.withComponent(component) : AphListItemStyled);

    return (
        <AphListItem
            role="option"
            aphpadding={padding}
            withLink={withLink}
            {...rest}
            ref={ref}
            className={`aph-list__item ${className || ''} ${!withLink ? '' : 'aph-list__item--with-link'}`}
        />
    );
});

/* Default Properties */
ListItem.defaultProps = {
    hoverable: false,
    padding  : '10px',
    styles   : {},

    /**
     * Use it when you need a link inside, such as React Router Link
     */
    withLink: false,
};

/* Properties Types */
ListItem.propTypes = {
    hoverable: propTypes.bool,
    padding  : propTypes.string,
    styles   : propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
    ]),
    withLink: propTypes.bool,
};

/* Exporting */
export default ListItem;
