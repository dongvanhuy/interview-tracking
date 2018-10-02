import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from '../containers/common/confirmationModal/ConfirmationModal';
import { Button } from 'react-bootstrap/lib';


describe('ConfirmationModal', () => {
    const handleOK = jest.fn();
    const defaultProps = {
        show: false,
        messages: '',
        handleClose: jest.fn(),
        handleOK,
    }

    let wrapper = shallow(<ConfirmationModal {...defaultProps} />);

    it('should render', () => {
        expect(wrapper.find('.success-modal').length).toEqual(1);
    });

    it('should call function ok when click on Button', () => {
        wrapper.find(Button).at(0).simulate('click');
        expect(handleOK).toHaveBeenCalled();
        // wrapper.find(Button).at(1).simulate('click');
        // expect(handleClose).toHaveBeenCalled();
    });

    it('should default', () => {
        const props = {
            show: false,
            messages: '',
        }
        wrapper = shallow(<ConfirmationModal {...props} />);
    });
});
