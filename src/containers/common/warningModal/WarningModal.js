import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap/lib';

class WarningModal extends Component {
  defaultProps = {
      show: false,
      paragraph: '',
      handleClose: () => {},
      handleOK: () => {},
  };


  render() {
      return (
          <div>
              <Modal
                  show={this.props.show}
                  onHide={this.props.handleClose}
                  className="static-modal"
              >
                  <Modal.Header closeButton>
                      <Modal.Title>Notification</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <p>{this.props.paragraph}</p>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button
                          onClick={() => this.props.handleOK()}
                      >
                OK
                      </Button>
                  </Modal.Footer>
              </Modal>
          </div>
      );
  }
}


export default WarningModal;
