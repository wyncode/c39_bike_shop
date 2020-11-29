import React from 'react';
import { Card } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const ProgressBar = () => {
  return (
    <div>
      <Card className="bg-dark">
        <Card.Img src="https://imgur.com/wE9rGJ8.png" alt="Card image" />
        <ProgressBar />
      </Card>
    </div>
  );
};

export default ProgressBar;
