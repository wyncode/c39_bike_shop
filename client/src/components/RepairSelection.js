import React, { useState } from 'react';
import {
  Modal,
  Button,
  Form,
  ModalFooter,
  Collapse,
  Container
} from 'react-bootstrap';

const RepairSelection = ({
  repair,
  selectedRepairs,
  handleRepairSelections
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="mt-4">
      <Button
        className="d-flex justify-content-between btnRep"
        size="lg"
        block
        onClick={handleShow}
        style={
          selectedRepairs.includes(repair._id)
            ? { backgroundColor: 'blue' }
            : {}
        }
      >
        <p>{repair?.repair}</p>
        <p>{repair?.price}</p>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header className="close-btn" closeButton></Modal.Header>

          <Modal.Body className="d-flex flex-column justify-content-center modal-bd">
            <h1 className="modal-bd">{repair?.name}</h1>
            <p>{repair?.description}</p>
            <Button
              className="btnModal"
              size="sm"
              onClick={() => setShow(!show)}
              aria-controls="example-collapse-text"
              aria-expanded={show}
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
            <Collapse in={show}>
              <div id="example-collapse-text">
                Here is a brief description of your repair
              </div>
            </Collapse>

            <h6 className="mt-4">
              Repairs may typically take up to 24-48 hours for completion. In
              some cases repairs take longer
            </h6>
            <Form className="d-flex flex-column mt-5" onSubmit={handleClose}>
              <Form.Group>
                <Form.Check type="checkbox" label="Select this repair" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <ModalFooter className="d-flex justify-content-center modal-ft">
            <Button
              onClick={
                (() => handleRepairSelections(repair._id)) && handleClose
              }
              className="btn-pink-sm-md mt-2"
            >
              Confirm
            </Button>
          </ModalFooter>
        </Modal.Dialog>
      </Modal>
    </Container>
  );
};

export default RepairSelection;
