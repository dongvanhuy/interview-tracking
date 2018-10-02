import React from 'react';
import { shallow } from 'enzyme';
import WarningModal from '../containers/common/warningModal/WarningModal';
import { Button } from 'react-bootstrap/lib';


describe('WarningModal', () => {
    const handleOK = jest.fn();
    const defaultProps = {
        show: false,
        paragraph: '',
        handleClose: jest.fn(),
        handleOK,
    }

    let wrapper = shallow(<WarningModal {...defaultProps} />);

    it('should render', () => {
        expect(wrapper.find('.static-modal').length).toEqual(1);
    });

    it('should call function ok when click on Button', () => {
        wrapper.find(Button).simulate('click');
        expect(handleOK).toHaveBeenCalled();
    });

    it('should default', () => {
        const props = {
            show: false,
            paragraph: '',
        }
        wrapper = shallow(<WarningModal {...props} />);
    });
});
