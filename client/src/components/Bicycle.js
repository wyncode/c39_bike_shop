import React, { useEffect, useContext, useState } from 'react';
import { Card, Modal, Button, Form } from 'react-bootstrap';
import './styles/profile.css';
import axios from 'axios';
import swal from 'sweetalert';
import { AppContext } from '../context/AppContext';
import Bike from './Bike';

const Bicycle = () => {
  const [formData, setFormData] = useState(null);
  const { fetchCurrentUser } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`/api/cyclist/find/5fc3d219ab206131231648d5`, {
        withCredentials: true
      })
      .then(({ data }) => {
        fetchCurrentUser(data);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      const Data = new FormData();
      Data.append('bikeName', formData.bikeName);
      Data.append('bikeModel', formData.bikeModel);
      Data.append('bikeType', formData);
      await axios({
        method: 'POST',
        url: `/api/5fc3d21cab206131231648fd/bike`,
        withCredentials: true,
        Data
      });

      swal('New Bike!', 'Get Riding!', 'success');
      setFormData(null);
    } catch (error) {
      console.log(error);
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
