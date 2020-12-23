import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../04/Input';

describe('<input>', () => {
	it('renders without crashing', ()=> {
		expect(() => {
			shallow(<input />);
		}).not.toThrow();
	});

	it('has one element', () => {
		const wrapper = shallow(<Input />);
		expect(wrapper.length).toEqual(1);
		expect(wrapper).toHaveLength(1);
	});
});