/* Packages */
import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';

/* UI Framework Utils */
import { colors, text } from '../../utils';

/* Component Itself */
const AphListItemStyled = styled.li`
    box-sizing: border-box;

    display: block;
    margin : 0;
    padding: ${props => props.aphPadding};

    ${props => text(props, props.textSize)};

    box-shadow: ${props => ((!props.borderTop && !props.borderBottom) ? null : `inset 0 ${props.borderBottom ? '-' : ''}1px 0 0 ${colors.getFromTheme(props, 'shadow', 'crystal')}`)};
    color: ${props => ((!props.disabled && !props.aphColor) ? null : colors.getFromTheme(props, (props.disabled ? 'helper' : (props.aphColor || 'secondary'))))};
    cursor: ${props => (!props.disabled ? null : 'not-allowed')};

    transition :
        color 0.15s linear,
        background-color 0.15s linear
    ;
    will-change:
        color,
        background-color
    ;

    &.active {
        color: ${props => colors.getFromTheme(props, (props.disabled ? 'helper' : (props.aphColor || 'secondary')))};
        background-color: ${props => colors.getFromTheme(props, (props.disabled ? 'disabled' : (props.aphColor || 'secondary')), 'crystal', 0.3)};
    }

    ${props => (props.onClick || props.withLink) ? {
        cursor: (props.disabled ? 'not-allowed' : 'pointer'),
        color: colors.getFromTheme(props, (props.disabled ? 'helper' : (props.aphColor || 'secondary'))),

        padding: (!props.withLink ? null : '0'),

        '&:hover': {
            color: colors.getFromTheme(props, (props.disabled ? 'helper' : (props.aphColor || 'secondary'))),
            backgroundColor: colors.getFromTheme(props, (props.disabled ? 'disabled' : (props.aphColor || 'secondary')), 'crystal', 0.3),
        },

        '.aph-list__item__link, > a': {
            display: 'block',
            color  : 'inherit',
            padding: (!props.withLink ? null : props.aphPadding),
            textDecoration: 'none',
        },
    } : null};

    ${props => (props.hoverable) ? {
        '&:hover': {
            backgroundColor: colors.getFromTheme(props, 'disabled', 'original', 0.3),
        }
    } : null};

    ${({ styles }) => styles};
`;

/* Component Itself */
const ListItem = forwardRef((props, ref) => {
    const {
        className,
        color,
        component,
        withLink,
        padding,

        ...rest
    } = props;

    const AphListItem = (component ? AphListItemStyled.withComponent(component) : AphListItemStyled);

    return (
        <AphListItem
            role="option"
            aphColor={color}
            aphPadding={padding}
            withLink={withLink}
            {...rest}
            ref={ref}
            className={`aph-list__item ${className || ''} ${!withLink ? '' : 'aph-list__item--with-link'}`}
        />
    );
});

/* Default Properties */
ListItem.defaultProps = {
    borderTop: false,
    borderBottom: false,
    color: '',
    disabled: false,
    hoverable: false,
    padding: '10px 15px',
    styles: {},
    withLink: false,
};

/* Properties Types */
ListItem.propTypes = {
    /**
     * Applies a box-shadow to styles, simulating the border-top property
     */
    borderTop: propTypes.bool,

    /**
     * Applies a box-shadow to styles, simulating the border-bottom property
     */
    borderBottom: propTypes.bool,

    /**
     * Some color for Color Utilities (visity on sidemenu)
     */
    color: propTypes.string,

    /**
     * Disabled state changes color an background
     */
    disabled: propTypes.bool,

    /**
     * Background color changes on hover event
     */
    hoverable: propTypes.bool,

    /**
     * Internal spacement
     */
    padding: propTypes.string,

    /**
     * Custom Styles
     */
    styles: propTypes.object,

    /**
     * Use it when you need a link inside, such as React Router Link
     */
    withLink: propTypes.bool,
};

/* Exporting */
export default ListItem;
