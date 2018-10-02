/* Packages */
import React from 'react';

/* Test Suite */
import { expect } from 'chai';
import { shallow } from 'enzyme';

/* Component */
import Regular from './Regular';

/* Constants */
import { BUTTON_STYLES as STYLES } from '../constants';

/* Helper */
let styles = Object.assign({}, STYLES);

/* Test */
describe('Regular Button', () => {

    test('should render a regular button', () => {
        const wrapper      = shallow(<Regular styles={styles}>Regular Button</Regular>);
        const { children } = wrapper.props();

        expect(children).to.include('Regular Button');
    });

    test('should render a regular error button', () => {
        const wrapper      = shallow(<Regular styles={styles} color="error">Regular Error Button</Regular>);
        const { children } = wrapper.props();

        expect(children).to.include('Regular Error Button');
    });

});
