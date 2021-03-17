/* Core Packages */
import React, { Fragment, useState } from 'react';

/* Composition Components */
import {
    Button,
    Segment,
} from '../';

/* Component Itself */
import ActionBar from './ActionBar';

/* Component Stories */
export default {
    component : ActionBar,
    title     : 'Components/ActionBar',
    parameters: {
        componentSubtitle: 'Toggle visibility of action elements',
    },
};

/* Component Example */
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
        <Fragment>
            <Segment
                textAlign="center"
                styles={{
                    minHeight: '160px',
                }}>
                <Button
                    id="action-bar-example-btn-toggle"
                    type="button"
                    color="secondary"
                    link={true}
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
                <Button
                    id="action-bar-example-btn-action"
                    type="button"
                    color="success"
                    onClick={toggle}>
                    Toggle
                </Button>
            </ActionBar>
            {/* Component Usage Example */}
        </Fragment>
    );
};
