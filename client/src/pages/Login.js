import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Image, Card } from 'react-bootstrap';
import '../components/styles/login.css';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const Login = ({ history }) => {
  const { fetchCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', formData);
      fetchCurrentUser();
      history.push('/');
    } catch (error) {
      console.log(`Oops!`, 'Something went wrong.');
    }
  };

  return (
    <Container>
      <Form className="d-flex" onSubmit={handleLogin}>
        <Card>
          <Card.Title className="logintitle">
            Welcome to the Bikeshop
          </Card.Title>
          <Card.Img
            src="https://imgur.com/NB8piSE.png"
            alt="crank"
            className="crank"
          />
          <Card.ImgOverlay className="d-flex">
            <Card.Body className="LoginNotice">
              Log in to track your repair progress.
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
        <Form.Group className="d-flex flex-column">
          <Form.Group
            controlId="formBasicCheckbox"
            className="d-flex mt-3 justify-content-around"
          >
            <Form.Group>
              <Image
                src="https://imgur.com/vGj6QjL.png"
                thumbnail
                className="tn"
              />
            </Form.Group>
            <Form.Group>
              <Image
                src="https://imgur.com/tAuaIZp.png"
                thumbnail
                className="tn"
              />
            </Form.Group>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email" className="formlabel">
              Profile Name
            </Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
              className="input"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password" className="formlabel">
              Password
            </Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              className="input"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button type="submit" className="btn-pink-sm">
              Login
            </Button>
          </Form.Group>
          <Link className="mt-4 text-center" to="/signup">
            Need an Account? Sign up.
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
