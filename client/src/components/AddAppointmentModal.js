import React, { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';

const AddAppointmentModal = (props) => {
  const { setLoading } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      axios.patch(
        'api/:id',
        { dropoffDate: props.date },
        { withCredentials: true }
      );
      setLoading(false);
      props.onHide();
    } catch (error) {
      swal('Busted for doping!', error);
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Set An Appointment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Details that may help your bike mechanic"
                name="description"
                // onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicDueDate">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="What goes here?"
                name="dropoffDate"
                defaultValue={props.date}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Button type="submit">Set Appointment</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddAppointmentModal;
