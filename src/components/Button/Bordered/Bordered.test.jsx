/* Packages */
import React from 'react';

/* Test Suite */
import { expect } from 'chai';
import { shallow } from 'enzyme';

/* Component */
import Bordered from './Bordered';

/* Constants */
import { BUTTON_STYLES as STYLES } from '../constants';

/* Helper */
let styles = Object.assign({}, STYLES);

/* Test */
describe('Bordered Button', () => {

    test('should render a bordered button', () => {
        const wrapper      = shallow(<Bordered styles={styles}>Bordered Button</Bordered>);
        const { children } = wrapper.props();

        expect(children).to.include('Bordered Button');
    });

    test('should render a bordered error button', () => {
        const wrapper      = shallow(<Bordered styles={styles} color="error">Bordered Error Button</Bordered>);
        const { children } = wrapper.props();

        expect(children).to.include('Bordered Error Button');
    });

});
