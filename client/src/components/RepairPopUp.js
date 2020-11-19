import React, { useState } from 'react';
import { Toast, Button, Form, Collapse, Container } from 'react-bootstrap';

const RepairPopUp = () => {
  const handleClick = () => {};
  const [open, setOpen] = useState(false);
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        minHeight: '100px'
      }}
    >
      <Toast
        style={{
          position: 'absolute',
          top: 0,
          right: 0
        }}
      >
        <Container>
          <Toast.Header className="d-flex justify-content-end"></Toast.Header>

          <Toast.Body className="d-flex flex-column justify-content-center">
            <strong>Repair Name:</strong>
            <Toast.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              gravida interdum nisi, quis tempus justo pharetra vitae. Ut luctus
              finibus libero, accumsan molestie enim semper aliquet.
            </Toast.Body>
            <Toast.Body>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                size="sm"
              >
                Learn More
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </Collapse>
            </Toast.Body>
          </Toast.Body>

          <Toast.Body>
            <strong>
              Repairs may typically take up to 24-48 hours for completion. In
              some cases repairs take longer
            </strong>
          </Toast.Body>

          <Form className="mt-2">
            <Form.Check type="checkbox" label="Select this repair" />
            <div class="d-flex align-items-center justify-content-center mt-4">
              <Button onClick={handleClick}>Confirm</Button>
            </div>
          </Form>
        </Container>
      </Toast>
    </div>
  );
};

export default RepairPopUp;
