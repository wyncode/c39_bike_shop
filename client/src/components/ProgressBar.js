import React from 'react';
import { Card } from 'react-bootstrap';

export const ProgressBar = () => {
  return (
    <div>
      <Card className="bg-dark">
        <Card.Img src="https://imgur.com/wE9rGJ8.png" alt="Card image" />
        <Card.ImgOverlay className="tracker tracker1 tracker2 tracker3 tracker4 tracker5 tracker6"></Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ProgressBar;
