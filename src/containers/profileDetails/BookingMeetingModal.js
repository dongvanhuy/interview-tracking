import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap/lib';

export default class BookingMeetingModal extends Component {
   static defaultProps = {
       show: false,
       title: '',
       handleClose: () => {},
       handleOK: () => {},
   };

  propsTypes = {
      show: PropTypes.bool,
      title: PropTypes.string,
      startTime: PropTypes.string,
      endTime: PropTypes.string,
      emailBookMeetingFirst: PropTypes.string,
      emailBookMeetingSecond: PropTypes.string,
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
                      <Modal.Title>Booking Meeting</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <p>body</p>
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
