/* Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Constants */
import { BUTTON_STYLES as STYLES } from './constants';

/* Nested Components */
import Bordered from './Bordered/Bordered';
import Regular from './Regular/Regular';

/* Component */
class Button extends React.Component {
    render() {
        const { block, bordered, size } = this.props;
        let styles = Object.assign({}, STYLES);

        if (block) {
            styles.display = 'block';
            styles.width   = '100%';
        }

        switch (size) {
            case 'xs':
                styles.fontSize   = '9px';
                styles.minHeight  = '20px';
                styles.lineHeight = '18px';
                styles['@media (max-width: 767px)'] = {
                    minHeight : '30px',
                    lineHeight: '28px',
                };
                break;

            case 'sm':
                styles.fontSize   = '13px';
                styles.minHeight  = '30px';
                styles.lineHeight = '28px';
                styles['@media (max-width: 767px)'] = {
                    minHeight : '40px',
                    lineHeight: '38px',
                };
                break;

            default:
                styles.minHeight  = '40px';
                styles.lineHeight = '38px';
                styles['@media (max-width: 767px)'] = {
                    minHeight : '50px',
                    lineHeight: '48px',
                };
        }

        if (bordered) {
            return (<Bordered styles={styles} {...this.props} />);
        }

        return (<Regular styles={styles} {...this.props} />);
    }
}

/* Default Properties */
Button.defaultProps = {
    type    : 'button',
    disabled: false,
    color   : 'primary',
    bordered: false,
    block   : false,
    size    : '',
};

/* Properties Types */
Button.propTypes = {

    /**
    * Button Type.
    * Button, Reset, Submit
    */
    type: PropTypes.string,

    /**
    * Should the Button be disabled?
    */
    disabled: PropTypes.bool,

    /**
    * Renders the button using an alternative color.
    * Secondary, Warning, Error, Success
    */
    color: PropTypes.string,

    /**
    * Should the Button be bordered?
    */
    bordered: PropTypes.bool,

    /**
    * Should the Button be block?
    */
    block: PropTypes.bool,

    /**
    * Size of the button. Use the Button's xs or sm.
    */
    size: PropTypes.string,
};

export default Button;
