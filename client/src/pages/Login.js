import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Image, Card } from 'react-bootstrap';

const Login = () => {
  const handleChange = () => {};

  return (
    <div className="container d-flex justify-content-between fullscreen">
      <Card className="login-card">
        <Card.Title>Welcome to the BikeShop</Card.Title>
      </Card>
      <Form
        style={{ width: 300 }}
        className="d-flex flex-column align-items-center justify-content-center ml-5"
      >
        <Form.Group controlId="formBasicCheckbox" className="d-flex">
          <Form.Group>
            <Image
              src="https://imgur.com/vGj6QjL.png"
              thumbnail
              className="tn"
            />
            <Form.Check type="checkbox" label="Cyclist" />
          </Form.Group>
          <Form.Group>
            <Image
              src="https://imgur.com/tAuaIZp.png"
              thumbnail
              className="tn"
            />
            <Form.Check type="checkbox" label="Bikeshop" />
          </Form.Group>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Login</Button>
        </Form.Group>
        <Link className="mt-4" to="/signup">
          Need an Account? Sign up.
        </Link>
      </Form>
    </div>
  );
};

export default Login;
