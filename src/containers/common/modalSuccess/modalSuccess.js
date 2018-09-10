import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap/lib';

export class SuccessModal extends Component {
    defaultProps = {
        show: false,
        messages: '',
        handleClose: () => {},
        handleBackToList: () => {},
    }

    propsTypes = {
        show: PropTypes.bool,
        messages: PropTypes.string,
        handleClose: PropTypes.func,
        handleBackToList: PropTypes.func,
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} className="success-modal">
                <Modal.Header closeButton>
                    <img className="icon" alt="" />
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.messages}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleBackToList}>Back to list</Button>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SuccessModal;
