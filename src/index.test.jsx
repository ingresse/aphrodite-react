/* Packages */
import React from 'react';

/* Test Suite */
import { expect } from 'chai';
import { shallow } from 'enzyme';

/* Testing Exported Components */
import { Button } from './';

/* Testing Exported Constants */
import { COLORS } from './';

/* Test */
describe('Index', () => {

    describe('Components', () => {

        test('should export the Button', () => {
            const wrapper      = shallow(<Button>Regular Button</Button>);
            const { children } = wrapper.props();

            expect(children).to.include('Regular Button');
        });

    });

    describe('Constants', () => {

        test('should export the colors object', () => {
            expect(COLORS.BLACK).to.include('rgb(45, 45, 45)');
        });

    });

});
