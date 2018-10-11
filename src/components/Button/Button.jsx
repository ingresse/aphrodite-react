/* Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Constants */
import { BUTTON_STYLES as STYLES} from './constants';
import { MEDIA_QUERIES } from '../../constants';

/* Nested Components */
import Bordered from './Bordered/Bordered';
import Regular from './Regular/Regular';

/* Component */
class Button extends React.Component {
    render() {
        const { block, bordered, size, styles } = this.props;
        let _styles = Object.assign({}, STYLES);

        if (block) {
            _styles.display = 'block';
            _styles.width   = '100%';
        }

        switch (size) {
            case 'xs':
                _styles.fontSize   = '9px';
                _styles.minHeight  = '20px';
                _styles.lineHeight = '18px';
                _styles[MEDIA_QUERIES.XS] = {
                    minHeight : '30px',
                    lineHeight: '28px',
                };
                break;

            case 'sm':
                _styles.fontSize   = '13px';
                _styles.minHeight  = '30px';
                _styles.lineHeight = '28px';
                _styles[MEDIA_QUERIES.XS] = {
                    minHeight : '40px',
                    lineHeight: '38px',
                };
                break;

            default:
                _styles.minHeight  = '40px';
                _styles.lineHeight = '38px';
                _styles[MEDIA_QUERIES.XS] = {
                    minHeight : '50px',
                    lineHeight: '48px',
                };
        }

        _styles = Object.assign(_styles, styles);

        if (bordered) {
            return (<Bordered {...this.props} styles={_styles} />);
        }

        return (<Regular {...this.props} styles={_styles} />);
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
