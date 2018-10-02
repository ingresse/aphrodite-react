/* Packages */
import React from 'react';

/* Test Suite */
import { expect } from 'chai';
import { shallow } from 'enzyme';

/* Component */
import { Button } from '../';

/* Test */
describe('Button', () => {

    describe('Regular', () => {

        test('should render a regular button', () => {
            const wrapper      = shallow(<Button>Regular Button</Button>);
            const { children } = wrapper.props();

            expect(children).to.include('Regular Button');
        });

        test('should render a regular block button', () => {
            const wrapper      = shallow(<Button block>Regular Block Button</Button>);
            const { children } = wrapper.props();

            expect(children).to.include('Regular Block Button');
        });

        test('should render a regular small size button', () => {
            const wrapper      = shallow(<Button size="sm">Regular Small Button</Button>);
            const { children } = wrapper.props();

            expect(children).to.include('Regular Small Button');
        });

        test('should render a regular extra small button', () => {
            const wrapper      = shallow(<Button size="xs">Regular Extra Small Button</Button>);
            const { children } = wrapper.props();

            expect(children).to.include('Regular Extra Small Button');
        });

    });

    describe('Bordered', () => {

        test('should render a bordered button', () => {
            const wrapper      = shallow(<Button bordered>Bordered Button</Button>);
            const { children } = wrapper.props();

            expect(children).to.include('Bordered Button');
        });

        test('should render a bordered error button', () => {
            const wrapper      = shallow(<Button bordered color="error">Bordered Error Button</Button>);
            const { children } = wrapper.props();

            expect(children).to.include('Bordered Error Button');
        });

    });

});
