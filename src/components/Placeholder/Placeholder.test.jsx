/* Packages */
import React from 'react';

/* Test Suite */
import { expect } from 'chai';
import { shallow } from 'enzyme';

/* Component */
import Placeholder from './Placeholder.jsx';

/* DOM/Unit test */
describe('Placeholder', () => {

    test('validate default behavior', () => {
        let className = 'placeholder';
        let wrapper   = shallow(<Placeholder className={className} />);
        let container = wrapper.props();

        expect(container.className).to.include(className);
    });

});
