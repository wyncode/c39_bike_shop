import React from 'react';
import { Card } from 'react-bootstrap';

export const ProgressBar = () => {
  return (
    <div>
      <Card className="bg-dark">
        <Card.Img src="https://imgur.com/wE9rGJ8.png" alt="Card image" />
        <Card.ImgOverlay></Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ProgressBar;
