import React from 'react';
import { Form, Button } from 'react-bootstrap';

const profile = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>UserName</Form.Label>
        <Button>Update Username</Button>
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone Number </Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default profile;
