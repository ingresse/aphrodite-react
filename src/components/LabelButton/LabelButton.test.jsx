/* Packages */
import React from 'react';

/* Test Suite */
import { expect } from 'chai';
import { shallow } from 'enzyme';

/* Component */
import { LabelButton } from '../';

/* Test */
describe('LabelButton', () => {

    test('should render a button as label', () => {
        const wrapper      = shallow(<LabelButton>Label Button</LabelButton>);
        const { children } = wrapper.props();

        expect(children).to.include('Label Button');
    });

    test('should render a button as label, with block aspect', () => {
        const wrapper      = shallow(<LabelButton block>Label Block Button</LabelButton>);
        const { children } = wrapper.props();

        expect(children).to.include('Label Block Button');
    });

});
