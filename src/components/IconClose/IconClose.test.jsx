/* Packages */
import React from 'react';

/* Test Suite */
import { expect } from 'chai';
import { shallow } from 'enzyme';

/* Component */
import IconClose from './IconClose';

/* DOM/Unit test */
describe('IconClose', () => {


    test('should render the icon', () => {
        const wrapper = shallow(<IconClose />);

        expect(wrapper.find('[width="12px"]').exists()).to.equal(true);
    });

    test('should render the icon with black color', () => {
        const wrapper = shallow(<IconClose color="#000000" />);
        const color   = wrapper.find('rect').first().props().style.fill;

        expect(color).to.equal('#000000');
    });
});
