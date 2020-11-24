import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

const General = () => {
  return (
    <Card className="mt-3">
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            className="mb-1"
            placeholder="CurrentUser"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            className="mb-1"
            placeholder="test@test.com"
          />
        </Form.Group>
        <Form.Group>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Repeat New Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Form.Group>
        <Button>Submit Changes</Button>
      </Form>
    </Card>
  );
};

export default General;
