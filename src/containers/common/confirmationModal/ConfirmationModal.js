import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap/lib';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class ConfirmationModal extends Component {
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

    notify = () => toast('Wow so easy !');

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} className="success-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>{this.props.messages}</h3>
                    <p>{this.props.ps}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleBackToList} className="success-modal__button-yellow">OK</Button>
                    <Button onClick={this.props.handleClose}>CANCEL</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

