/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('components', () => {
    describe('App', () => {
        const props = {
            name: 'Mike',
        };

        it('renders without an error', () => {
            const wrapper = shallow(
                <App {...props} />
            );
            expect(wrapper.length).toBe(1);
        });

        it('renders "Hello, stranger!" when no name is given', () => {
            const wrapper = shallow(
                <App />
            );
            expect(wrapper.text()).toBe('Hello, stranger!');
        });
    });
});
