import React from 'react';
import { shallow } from 'enzyme';
import loadingInProgress from '../containers/common/loadingPage/loadingInProgress';

describe('loadingInProgress', () => {
    const defaultProps = {
        show: false,
    }

    let wrapper = shallow(<loadingInProgress {...defaultProps} />);

    it('no display', () => {
        expect(wrapper.find('div.loading-in-progres').length).toEqual(0);
    });

    it('should show', () => {
        const props = {
            show: true,
        }
        wrapper = shallow(<loadingInProgress {...props} />);
        expect(wrapper.find('div.loading-in-progres').length).toEqual(1);
    });
});
