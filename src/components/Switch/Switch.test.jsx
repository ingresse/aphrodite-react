/* Packages */
import React from 'react';

/* Test Suite */
import { expect } from 'chai';
import { shallow } from 'enzyme';

/* Component */
import { Switch } from '../';

/* Test */
describe('Switch', () => {

    describe('Checked', () => {

        test('should render the switch checked', () => {
            const wrapper      = shallow(<Switch checked={true} />);

            expect(wrapper.prop('checked')).to.be.true;
        });

    });

    describe('OnChange', () => {

        test('should render the switch checked', () => {
            let   check   = false;
            const wrapper = shallow(<Switch checked={check} onChange={() => {
                check = !check;
            }} />);

            wrapper.find('input').simulate('change');

            expect(check).to.be.true;
        });

    });
});
