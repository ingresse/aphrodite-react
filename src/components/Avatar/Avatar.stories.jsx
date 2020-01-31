/* Core Packages */
import React, { useState } from 'react';

/* Component Itself */
import Avatar from './Avatar';

/* Component Stories */
export default {
    component : Avatar,
    title     : 'Components/Avatar',
    parameters: {
        componentSubtitle: 'A styled component to avatar, with some facilities.',
    },
};

/* Component Example */
export const example = () => (
    <Avatar
        circle={true}
        center={true}
        alt="John Doe"
        name="John Doe"
        width="200px"
        height="200px"
    />
);
