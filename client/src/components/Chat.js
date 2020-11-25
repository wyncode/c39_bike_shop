import React from 'react';
import { Card } from 'react-bootstrap';
import './styles/profile.css';

const Chat = () => {
  return (
    <Card className="mt-5 chatbox" fluid>
      <Card.Body className="d-flex chat mb-5">
        <Card.Img
          className="profileImg-sm"
          src="https://imgur.com/PCEcljZ.png"
          alt="username"
        />
        <Card.Text>Hi. I would like to place and Order.</Card.Text>
      </Card.Body>
      <Card.Body className="d-flex chat ml-5">
        <Card.Text>Sure. What do you need fixed?</Card.Text>
        <Card.Img
          className="profileImg-sm"
          src="https://imgur.com/Wv38VLb.png"
          alt="bikeshop"
        />
      </Card.Body>
    </Card>
  );
};

export default Chat;
