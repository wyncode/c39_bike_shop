import React, { useState, useContext } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const SignUp = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cyclist', formData);
      sessionStorage.setItem('cyclist', response.data);
      setCurrentUser(response.data.cyclist);
      history.push('/');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
  };

  console.log(setCurrentUser);

  return (
    <Container
      className="ds-flex justify-content-center align-items-center"
      width="700px"
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>Create Your User Profile</h1>
        <Image src="https://imgur.com/vGj6QjL.png" height="200px" />
      </div>
      <Form onSubmit={handleCreate} className="d-flex flex-column">
        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Upload a profile picture"
            name="avatar"
            onChange={handleImageSelect}
          />
        </Form.Group>
        <Form.Group controlId="formBasic">
          <Form.Label>What is your zipcode?</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter your zipcode."
            size="lg"
            name="zipcode"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>What is your phone number?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            size="lg"
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>
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
              <Form.Control as="select" name="bikeType" onChange={handleChange}>
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

        <Button type="submit" className="btn-pink-sm m-auto">
          Finished
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
