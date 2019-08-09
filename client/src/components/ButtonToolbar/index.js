import React from "react";
import { Modal, Button } from 'react-bootstrap';

export function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>npm run seed</h4>
          <p>
            plants are cool plants plants plants 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
<<<<<<< HEAD
=======

>>>>>>> ce9dc8810c63e55fa6c97b5e5ea5a62fdef47cb8
