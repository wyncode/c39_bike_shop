import React, { useState, useContext } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const General = () => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser, setLoading } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('/api/user/me', formData);

      sessionStorage.setItem('user', response.data);

      setCurrentUser(response.data);
    } catch (error) {
      swal('You put on the wrong kit! Error: ', error.toString());
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const willDelete = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover your account!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      });
      if (willDelete) {
        try {
          await axios({
            method: 'DELETE',
            url: `/api/user/5fc3d219ab206131231648cb`,
            withCredentials: true
          });
          swal('I guess you left the team!', {
            icon: 'success'
          });
          setLoading(false);
        } catch (error) {
          swal(`Oops!`, 'Something went wrong.');
        }
      } else {
        swal('Your task is safe!');
      }
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
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
        <Button type="submit" className="btn-pink-sm mb-2">
          Submit Changes
        </Button>
      </Form>
      <Button className="btn-pink-sm" onSubmit={handleDelete}>
        Delete Account
      </Button>
    </Card>
  );
};

export default General;
