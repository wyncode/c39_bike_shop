import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

export const ProgressBarContainer = ({ now }) => {
  return (
    <div>
      <Card>
        <Card.Title className="mb-2">Repairs Tracker</Card.Title>
        <Card.Img
          src="https://imgur.com/wE9rGJ8.png"
          alt="Card image"
          className="mb-2"
        />
        <ProgressBar className="mb-2" animated now={now} />
      </Card>
    </div>
  );
};

export default ProgressBarContainer;
