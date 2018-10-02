import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from '../containers/common/errorPage/ErrorPage';

describe('Error Page', () => {
    let wrapper = shallow(<ErrorPage />);
    it('should render', () => {
        expect(wrapper.find('div.wrap').length).toEqual(1);
    });

});