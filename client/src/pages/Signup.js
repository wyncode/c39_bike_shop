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
    console.log(formData);
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
    <Container
      className="ds-flex justify-content-center align-items-center"
      width="700px"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px'
        }}
      >
        <h1>Welcome to The Bike Shop!</h1>
        <Button className="btn-pink-xlg" size="lg" block>
          {' '}
          Sign Up With Facebook{' '}
        </Button>
        <hr />
        <p>or</p>
        <hr />
        <h2>Sign up with your email address</h2>
        <Link to="/login">Have an account? Login</Link>
      </div>
      <Form onSubmit={handleSignUp} className="d-flex flex-column">
        <Form.Group controlId="formBasicName">
          <Form.Label>What should we call you?</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="name"
            placeholder="Enter your profile name."
            id="name"
            onChange={handleChange}
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>What is your email?</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter your email."
              size="lg"
              onChange={handleChange}
              id="email"
              name="email"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Create a password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create a password with a least 8 characters"
            onChange={handleChange}
            id="password"
            name="password"
          />
        </Form.Group>
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
        <Button variant="primary" type="submit" className="btn-pink-sm m-auto">
          Finished
        </Button>
        <Link className="m-auto" to="/login">
          Already have an account? Login.
        </Link>
      </Form>
    </Container>
  );
};

export default SignUp;
