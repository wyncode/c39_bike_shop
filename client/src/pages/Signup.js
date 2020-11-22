import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const SignUp = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
  };

  return (
    <Container className="ds-flex justify-content-center">
      <h1>Welcome to The Bike Shop!</h1>
      <Button size="lg" block>
        {' '}
        Sign Up With Facebook{' '}
      </Button>
      <p>or</p>
      <h2>Sign up with your email address</h2>
      <h4>Have an account? Login</h4>
      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>What is your email?</Form.Label>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter your email."
              size="lg"
              onSubmit={handleChange}
            />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Confirm your email</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Enter email again."
            size="lg"
            onSubmit={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Create a password</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Create a password with a least 8 characters"
            onSubmit={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>What should we call you?</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Control type="name" placeholder="Enter your profile name." />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>What's your phone number?</Form.Label>
        </Form.Group>
        {/* <Form.Group>
          <Form.Control
            type="name"
            placeholder="Enter your phone number."
            onSubmit={handleChange}
          />
        </Form.Group> */}
        <p>Do you prefer email or text notifications?</p>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I prefer to receive text message notifications"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I prefer to receive email notifications "
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Finished
        </Button>
      </Form>
      <Link className="mt-4" to="/login">
        Already have an account? Login.
      </Link>
    </Container>
  );
};

export default SignUp;
