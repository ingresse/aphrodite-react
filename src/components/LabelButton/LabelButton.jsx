/* Packages */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

/* Constants */
import { MEDIA_QUERIES, ANIMATIONS } from '../../constants';

/* Components */
import { Button } from '../';

/* Style Wrapper */
const StyledLabelWrapper = styled('div')(props => ({
    ...props.styles,
    position: 'relative',
}));

/* Styled Button Label */
const StyledLabelButton = Object.assign(ANIMATIONS.PULL_UP, {
    borderRadius: '8px',
    paddingRight: '5px',
    paddingLeft : '5px',

    '*' : {
        fontSize  : '12px',
        lineHeight: '10px',

        margin: '0 0 10px',
    },

    [MEDIA_QUERIES.XS]: {
        minHeight: '38px',
        maxHeight: '40px',

        '*': {
            display: 'none',
        }
    }
});

/* Styled Input */
const StyledLabelInput = styled('input')(props => ({
    position: 'absolute',
    opacity : 0,
    zIndex  : 1,
    top     : 0,
    right   : 0,
    bottom  : 0,
    left    : 0,
    width   : '100%',
    height  : '100%',
    cursor  : 'pointer',

    borderRadius: '8px',

    '&:disabled': {
        cursor: 'not-allowed',
    }
}));

/* Component it self */
class LabelButton extends React.Component {
    /**
     * Component Constructor
     *
     * @param {object} props - Component Inherit Props
     */
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            checked: props.checked || false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Handle Input Change
     *
     * @param {object} evt - DOM element click event
     */
    handleChange(evt) {
        if (!evt || !evt.target) {
            return;
        }

        const { value, onChange } = this.props;

        evt.persist();

        this.setState({
            checked: evt.target.checked,
        }, () => {
            onChange(evt);
        });
    }

    /**
     * Component Render
     */
    render() {
        const { props, state } = this;
        const labelInputId     = `labelBtnInput${props.id}`;
        const labelDisabled    = props.disabled ? true : false;

        return (
            <StyledLabelWrapper
                styles={{ display: props.hasOwnProperty('block') ? 'block' : 'inline-block', }}>
                <StyledLabelInput
                    type="checkbox"
                    id={labelInputId}
                    name={props.name}
                    onChange={this.handleChange}
                    disabled={labelDisabled}
                    value={props.value}
                    checked={state.checked} />
                <Button
                    type="button"
                    id={`labelBtn${props.id}`}
                    styles={StyledLabelButton}
                    disabled={labelDisabled}
                    bordered={!state.checked}
                    color={props.color}
                    block={props.block}>
                    {props.children}
                </Button>
            </StyledLabelWrapper>
        )
    }
}

/* Default Properties */
LabelButton.defaultProps = {
    id      : `random-${Math.random()}`,
    name    : '',
    value   : '',
    onChange: () => {},
};

/* Properties Types */
LabelButton.propTypes = {
    /**
    * Should the Input/Button checked?
    */
    checked: PropTypes.bool,

    /**
    * Should the Input/Button be disabled?
    */
    disabled: PropTypes.bool,

    /**
    * Renders the button using an alternative color.
    * Secondary, Warning, Error, Success
    */
    color: PropTypes.string,

    /**
    * Should the Button be block?
    */
    block: PropTypes.bool,
};

/* Export Component */
export default LabelButton;
