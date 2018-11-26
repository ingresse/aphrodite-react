/* Packages */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import propTypes from 'prop-types';
import styled from 'react-emotion';

/* Constants */
import { COLORS, ICONS, FORM } from '../../constants';

/* Helper Components */
import IconCheck from '../Icons/IconCheck';

/* Component it self */
const Input = (props) => {
    const { style, type } = props;

    let AphFormControl = styled('input')((props) =>
        Object.assign({}, FORM.STYLES.DEFAULT, {
            ...style,
        })
    );

    if (type !== 'checkbox' && type !== 'radio') {
        return (
            <AphFormControl {...props} />
        );
    }

    let AphFormMask    = null;
    let AphFormWrapper = null;
    let radio   = {};
    let icon    = ICONS.encodeSvg(<IconCheck size={20} color={props.color || COLORS.PRIMARY} />);
    let _props  = Object.assign({}, props);

    delete _props.children;
    delete _props.className;

    if (type === 'radio') {
        radio.borderRadius = '50%';
    }

    AphFormWrapper = styled('div')({
        position: 'relative',
        display : 'block',
        width   : '100%',
    });

    AphFormMask = styled('label')((props) =>
        Object.assign({}, FORM.STYLES.CHECKBOX_MASK, {
            '&:before': Object.assign(FORM.STYLES.DEFAULT, FORM.STYLES.CHECKBOX_MASK['&:before'], radio),
            ...props.labelStyle,
        })
    );

    AphFormControl = styled('input')((props) =>
        Object.assign({}, FORM.STYLES.CHECKBOX, {
            '&:checked + .aph-form__control__mask:before': {
                backgroundImage: `url(${icon})`,
            },
            ...style,
        })
    );

    return (
        <AphFormWrapper>
            <AphFormControl
                {..._props}
                className="aph-form__control"
            />
            <AphFormMask htmlFor={props.id}
                  className={`aph-form__control__mask ${props.className || ''}`}>
                {props.children}
            </AphFormMask>
        </AphFormWrapper>
    );
};

/* Exporting */
export default Input;
