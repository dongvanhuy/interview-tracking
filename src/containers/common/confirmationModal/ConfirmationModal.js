import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap/lib';

export default class ConfirmationModal extends Component {
  defaultProps = {
      show: false,
      messages: '',
      handleClose: () => {},
      handleOK: () => {},
  };

  propsTypes = {
      show: PropTypes.bool,
      messages: PropTypes.string,
      handleClose: PropTypes.func,
      handleOK: PropTypes.func,
  };

  render() {
      return (
          <React.Fragment>
              <Modal
                  show={this.props.show}
                  onHide={this.props.handleClose}
                  className="success-modal"
              >
                  <Modal.Header closeButton>
                      <Modal.Title>Confirmation</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <h4>{this.props.messages}</h4>
                      <p>{this.props.ps}</p>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button
                          onClick={() => this.props.handleOK()}
                          className="success-modal__button-yellow"
                      >
              OK
                      </Button>
                      <Button onClick={this.props.handleClose}>CANCEL</Button>
                      {/* <Button onClick={() => this.notify()}>CANCEL1</Button> */}
                  </Modal.Footer>
              </Modal>
          </React.Fragment>
      );
  }
}
