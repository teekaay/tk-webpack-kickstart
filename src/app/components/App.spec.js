/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('components', () => {
  describe('App', () => {
    const props = {

    };

    it('renders without an error', () => {
      const wrapper = shallow(
        <App {...props} />
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
