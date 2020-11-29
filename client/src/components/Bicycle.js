import React, { useContext, useState, useEffect } from 'react';
import { Card, Modal, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { AppContext } from '../context/AppContext';
import Bike from './Bike';
import './styles/profile.css';
import axios from 'axios';

const Bicycle = () => {
  const [formData, setFormData] = useState(null);
  const { fetchCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/bike`, formData, { withCredentials: true });
      await fetchCurrentUser();
      setFormData(null);
    } catch (error) {
      swal('Oops!', 'Something went wrong');
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Add Bicycle</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header className="close-btn" closeButton>
            <Modal.Title>Add Bicycle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Add a Bike to your profile</Form.Label>
                <Form.Row>
                  <Form.Control
                    type="text"
                    placeholder="BikeName"
                    ad
                    name="bikeName"
                    onChange={handleChange}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Bike Model"
                    name="bikeModel"
                    onChange={handleChange}
                  />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>What type of bike is it?</Form.Label>
                    <Form.Control
                      as="select"
                      name="bikeType"
                      onChange={handleChange}
                    >
                      <option>Road</option>
                      <option>Mountain</option>
                      <option>Commuter</option>
                      <option>Cruiser</option>
                      <option>Hybrid</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      <Card className="bike">
        <Bike bike={fetchCurrentUser} />
      </Card>
    </>
  );
};

export default Bicycle;
