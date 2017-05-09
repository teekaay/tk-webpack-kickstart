import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<h1>Hello</h1>)).toBe(true);
  });
});