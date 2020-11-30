import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import '../components/styles/login.css';

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
      console.log(response.data);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data);
      if (response.data.admin) {
        history.push('/bikeshop');
      } else {
        history.push('/cyclist');
      }
      const { data } = await axios.post('/api', formData);

      console.log('SIGNED UP THE USER', {
        formData,
        data
      });

      sessionStorage.setItem('user', data);
      setCurrentUser(data);

      data.admin ? history.push('/bikeshop') : history.push('/cyclist');
    } catch (error) {
      console.log('SignUp Error: ', error.toString());
    }
  };

  const setAdministrator = (val) => {
    setFormData({ ...formData, admin: val });
  };

  return (
    <Container
      className="ds-flex justify-content-center align-items-center"
      width="700px"
    >
      <Form onSubmit={handleSignUp} className="d-flex flex-column">
        <h1 className="m-auto">Welcome to The Bike Shop!</h1>

        <Form.Label className="text-center">
          {' '}
          Are you a Cyclist or a Shop Owner?
        </Form.Label>
        <div className="d-flex justify-content-evenly m-auto">
          <Form.Group>
            <Button
              className="btn-Selection"
              onClick={() => setAdministrator(false)}
            >
              <Image
                src="https://imgur.com/vGj6QjL.png"
                thumbnail
                className="tn"
              />
            </Button>
          </Form.Group>
          <Form.Group>
            <Button
              className="btn-Selection"
              onClick={() => setAdministrator(true)}
            >
              <Image
                src="https://imgur.com/tAuaIZp.png"
                thumbnail
                className="tn"
              />
            </Button>
          </Form.Group>
        </div>

        <h2 className="m-auto">Sign up with your email address</h2>
        <Link to="/login" className="m-auto">
          Have an account? Login
        </Link>

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
