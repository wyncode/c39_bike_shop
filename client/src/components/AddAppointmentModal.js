import React, { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';

const AddAppointmentModal = (props) => {
  const { setLoading, order, setAppointments } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dropOffDate = e.target.elements.dropOffDate.value;
    const description = e.target.elements.description.value;
    console.log(dropOffDate, description);
    setLoading(true);
    try {
      const { data } = await axios.patch(
        `/api/order/${order._id}`,
        { dropOffDate, description },
        { withCredentials: true }
      );
      setAppointments([data]);
      setLoading(false);
      props.onHide();
    } catch (error) {
      swal('Busted for doping!', error.message);
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
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Details that may help your bike mechanic"
                name="description"
                id="description"
                // onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="What goes here?"
                name="dropoffDate"
                defaultValue={props.date}
                id="dropOffDate"
              />
            </Form.Group>
            <Form.Group>
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
