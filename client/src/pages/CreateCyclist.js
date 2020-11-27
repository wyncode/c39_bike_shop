import React, { useState, useContext } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const CreateCyclist = ({ history }) => {
  const { setCurrentUser, setCyclist, cyclist, currentUser } = useContext(
    AppContext
  );
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const cyclistData = new FormData();
      // this information is not append information
      cyclistData.append('zipcode', formData.zipcode);
      cyclistData.append('phone', formData.phone);
      cyclistData.append('user', currentUser);
      const updatedCyclist = await axios({
        method: 'POST',
        url: `/api/cyclist`,
        withCredentials: true,
        cyclistData
      });
      console.log(updatedCyclist.data);
      setCyclist(updatedCyclist.data);
      history.push('/');
      swal("Let's start riding");
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
    console.log(cyclist);
  };

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

        <Button type="submit" className="btn-pink-sm m-auto">
          Finished
        </Button>
      </Form>
    </Container>
  );
};

export default CreateCyclist;
