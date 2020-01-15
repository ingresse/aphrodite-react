/* Core Packages */
import React, { useState } from 'react';

/* Helper Components */
import {
    Button,
    Segment,
} from '../';

/* Component Itself */
import ActionBar from './ActionBar';

/* Component Stories */
export default {
    component: ActionBar,
    title    : 'Components/ActionBar',
};

export const example = () => {
    /**
     * Example values
     */
    const [ visible, setVisible ] = useState(true);

    /**
     * Handle with click
     *
     * Toggle the `visible` value on every button click,
     * to display or hide the Action Bar component
     */
    function toggle() {
        setVisible(!visible);
    }

    /**
     * Render
     */
    return (
        <>
            <Segment
                textAlign="center"
                styles={{
                    minHeight: '160px',
                }}>
                <Button
                    id="action-bar-example-btn-toggle"
                    type="button"
                    color="secondary"
                    onClick={toggle}>
                    {visible ? 'Hide' : 'Visible'}
                </Button>
            </Segment>

            {/* Component Usage Example */}
            <ActionBar
                visible={visible}
                styles={{
                    textAlign: 'center',
                }}>
                Action Bar Content
            </ActionBar>
            {/* Component Usage Example */}
        </>
    );
};
