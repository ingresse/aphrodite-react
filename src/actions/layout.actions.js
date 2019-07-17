/* Constant */
import { LAYOUT } from '../constants';

/**
 * Trigger to Resize window event
 *
 * @return {function} dispatch
 */
const resized = () => {
    return dispatch => {
        dispatch({
            type: LAYOUT.RESIZED,
        });
    };
}

/* Exporting */
export const layoutActions = {
    resized,
};
