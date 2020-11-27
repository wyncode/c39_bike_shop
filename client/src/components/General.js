import React, { useState, useContext } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const General = () => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('/api/user/me', formData);

      sessionStorage.setItem('user', response.data);

      setCurrentUser(response);
    } catch (error) {
      swal('You put on the wrong kit! Error: ', error.toString());
    }
  };

  return (
    <Card className="mt-3">
      <Form onSubmit={handleUpdate}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="name"
            className="mb-1"
            placeholder="CurrentUser"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            className="mb-1"
            placeholder="test@test.com"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Group>
        <Button type="submit">Submit Changes</Button>
      </Form>
    </Card>
  );
};

export default General;
