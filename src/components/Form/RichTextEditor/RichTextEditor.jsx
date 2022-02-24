/* Core Packages */
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactQuill, { Quill } from 'react-quill';
import RichTextEditorPlainClipboard from './RichTextEditorPlainClipboard';
import 'react-quill/dist/quill.snow.css';

/* Component Styles */
import RichTextEditorStyledWrapper from './RichTextEditorStyledWrapper';

/* Composition Components */
import Styled from '../../Styled/Styled';

/* Lib Customization */
Quill.register('modules/clipboard', RichTextEditorPlainClipboard, true);

/* Component Itself */
const RichTextEditor = forwardRef(({
    value: originalValue,
    onChange,

    formats,
    modules,
    height,
    disabled,

    ...rest
}, fRef) => {
    /**
     * Local values
     */
    const ref                           = useRef(fRef || null);
    const [ localValue, setLocalValue ] = useState('');

    /**
     * Handle Changes
     *
     * @param {string} htmlAsString
     */
    function handleChange(htmlAsString) {
        setLocalValue(htmlAsString);
        onChange({
            target: {
                id: rest.id,
                name: rest.name,
                value: htmlAsString,
            },
        });
    }

    /**
     * Did Update
     */
    useEffect(() => {
        setLocalValue((originalValue || ''));
    }, [ originalValue ]);

    /**
     * Render
     */
    return (
        <RichTextEditorStyledWrapper minHeight={height}>
            <Styled
                radius={4}
                padding="0"
                background={disabled ? 'disabled' : 'background'}
            >
                <ReactQuill
                    ref={ref}
                    value={localValue}
                    onChange={handleChange}
                    disabled={disabled}
                    modules={{
                        ...modules,
                        toolbar: [
                            formats,
                            ...(modules.toolbar || []),
                        ],
                    }}
                    {...rest}
                    theme="snow"
                />
            </Styled>
        </RichTextEditorStyledWrapper>
    );
});

/**
 * Default props
 */
RichTextEditor.defaultProps = {
    /**
     * On editor change
     */
    onChange: () => null,

    /**
     * Editor content value
     */
    value: '',

    /**
     * Container minimum height
     */
    height: 240,

    /**
     * Quill modules configuration
     */
    modules: {},

    /**
     * Quill whitelist of available formats in Toolbar
     */
    formats: [
        'bold', 'italic', 'underline',
    ],
};

/**
 * Prop Types
 */
RichTextEditor.propTypes = {
    onChange: PropTypes.func.isRequired,
    value   : PropTypes.string,
    height  : PropTypes.number,
    modules : PropTypes.object,
    formats : PropTypes.array,
};

/* Exporting */
export default RichTextEditor;
export {
    RichTextEditorPlainClipboard,
    RichTextEditorStyledWrapper,
};
