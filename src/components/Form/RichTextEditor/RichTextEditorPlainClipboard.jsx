/* Core Packages */
import { Quill } from 'react-quill';

/* Lib Instances */
const Clipboard = Quill.import('modules/clipboard');
const Delta     = Quill.import('delta');

/* Component Itself */
class RichTextEditorPlainClipboard extends Clipboard {
    /**
     * Prevent Paste to accept only Plain Text
     *
     * @param {object} evt
     */
    onPaste(evt) {
        evt.preventDefault();

        const range = this.quill.getSelection();
        const text  = evt.clipboardData.getData('text/plain');
        const delta = new Delta();

        delta
        .retain(range.index)
        .delete(range.length)
        .insert(text);

        const index  = (text.length + range.index);
        const length = 0;

        this.quill.updateContents(delta, 'silent');
        this.quill.setSelection(index, length, 'silent');
        this.quill.scrollIntoView();
    }
}

/* Exporting */
export default RichTextEditorPlainClipboard;
