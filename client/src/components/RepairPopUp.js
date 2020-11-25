import React, { useState } from 'react';
import { Modal, Button, Form, ModalFooter, Collapse } from 'react-bootstrap';
import './styles/repairs.css';

const RepairPopUp = () => {
  const handleClick = () => {};
  const [open, setOpen] = useState(false);
  return (
    <Modal.Dialog>
      <Modal.Header className="close-btn" closeButton></Modal.Header>

      <Modal.Body className="d-flex flex-column justify-content-center modal-bd">
        <h1 className="modal-bd">Repair Name:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          gravida interdum nisi, quis tempus justo pharetra vitae. Ut luctus
          finibus libero, accumsan molestie enim semper aliquet.
        </p>

        <Button
          className="btnModal"
          size="sm"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Learn More{' '}
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.41176 6L0.438236 0.75L8.38529 0.75L4.41176 6Z"
              fill="black"
            />
          </svg>{' '}
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">asdasdfasfasf</div>
        </Collapse>

        <h6 className="mt-4">
          Repairs may typically take up to 24-48 hours for completion. In some
          cases repairs take longer
        </h6>
        <Form className="d-flex flex-column mt-5">
          <Form.Group>
            <Form.Check type="checkbox" label="Select this repair" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <ModalFooter className="d-flex justify-content-center modal-ft">
        <Button onClick={handleClick} className="btn-pink-sm-md mt-2">
          Confirm
        </Button>
      </ModalFooter>
    </Modal.Dialog>
  );
};

export default RepairPopUp;
