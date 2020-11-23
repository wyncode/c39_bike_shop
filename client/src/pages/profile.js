import React from 'react';
import { Image, Container, Button, Form, Overlay } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container>
      <h1>Cyclist Profile</h1>
      <Image src="https://imgur.com/PCEcljZ.png" roundedCircle />
      <Form>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control placeholder="Users Name" />
          <Button>Submit</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control placeholder="current email" />
          <Button>Submit</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>

          <Button>Submit</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label>Zipcode:</Form.Label>
          <Button>Submit</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label>Bicycles:</Form.Label>
          <Button>Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Profile;
