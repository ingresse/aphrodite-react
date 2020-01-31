import React, { useState, useEffect } from 'react';
import ProTypes from 'prop-types';

/* Styled Components */
import {
    ExpansionPanelWrapper,
    ExpansionPanelHeader,
    ExpansionPanelContent,
} from './ExpansionPanelStyled';

function ExpansionPanel(props) {
    const {
        header,
        children,

        expanded,
        expandedCallback,

        styles,
        headerStyles,

        ...rest
    } = props;

    const [opened, setOpened] = useState(expanded);

    /**
     * Rewrite "opened" local values when "expanded" prop value changes
     */
    useEffect(() => {
        setOpened(expanded);
    }, [expanded]);

    /**
     * Handle Expansion Panel visible
     */
    function toggle() {
        setOpened(!opened);
        expandedCallback(!opened);
    }

    return (
        <ExpansionPanelWrapper
            {...rest}
            styles={styles}
            className="aph-expansion-panel"
        >
            <ExpansionPanelHeader
                onClick={toggle}
                headerStyles={headerStyles}
                className="aph-expansion-panel__header"
            >
                {header}
            </ExpansionPanelHeader>

            <ExpansionPanelContent
                opened={opened}
                className="aph-expansion-panel__content"
            >
                {children}
            </ExpansionPanelContent>

        </ExpansionPanelWrapper>
    );
}

/* Default Props */
ExpansionPanel.defaultProps = {
    expanded  : false,
    styles: {},
    headerStyles: {},
    expandedCallback: () => null,
};

/* PropTypes */
ExpansionPanel.proTypes = {
    header: ProTypes.any.isRequired,
    children: ProTypes.oneOfType([
        ProTypes.func,
    ]).isRequired,

    expanded: ProTypes.bool,
    expandedCallback: ProTypes.any,

    styles: ProTypes.object,
    headerStyles: ProTypes.object,
};

export default ExpansionPanel;
