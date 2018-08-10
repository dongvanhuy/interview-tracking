import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';


describe('Login', () => {
    it('should render', () => {
        const wrapper = shallow(<Login loginCheck={() => {}} />);
        expect(wrapper.find('.formLogin').length).toEqual(1);
    });
});
