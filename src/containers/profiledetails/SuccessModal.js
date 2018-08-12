import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export class SuccessModal extends React.Component {
    render() {
        return (
            <Modal
                id="profiledetails__model--success"
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg"> Update/ Add SUCCESS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Update/ Add data success</h4>
                    <p>
                        Update/ Add data success
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>OK</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

