import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('render App component ', () => {
	shallow(<App />);
});