/* Constant */
import { LAYOUT } from '../constants';

/**
 * Trigger to Resize window event
 *
 * @return {function} dispatch
 */
const resized = (_window) => {
    return dispatch => {
        dispatch({
            type  : LAYOUT.RESIZED,
            window: _window,
        });
    };
}

/* Exporting */
export const layoutActions = {
    resized,
};
