import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Image, Card } from 'react-bootstrap';
import '../components/styles/login.css';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const Login = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/');
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };

  return (
    <Container>
      <Form
        className="d-flex align-items-center justify-content-between "
        onSubmit={handleLogin}
      >
        <Card>
          <Card.Title className="logintitle">
            Welcome to the Bikeshop
          </Card.Title>
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
              {/* <Form.Check type="checkbox" style={{fontFamily:"Actor", fontSize:"22px"}}label="Cyclist" /> */}
            </Form.Group>
            <Form.Group>
              <Image
                src="https://imgur.com/tAuaIZp.png"
                thumbnail
                className="tn"
              />
              {/* <Form.Check type="checkbox" style={{fontFamily:"Actor", fontSize:"22px"}} label="Bikeshop" /> */}
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
          <Link className="mt-4" to="/signup">
            Need an Account? Sign up.
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
