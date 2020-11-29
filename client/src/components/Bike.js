import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Bike = () => {
  const { cyclist } = useContext(AppContext);

  return (
    <div>
      {cyclist &&
        cyclist.bike?.map((bike) => (
          <Card
            key={bike._id}
            className="d-flex flex-column align-items-center"
          >
            <Card.Title>{bike.bikeName}</Card.Title>
            <Card.Text>{bike.bikeModel}</Card.Text>
            <Card.Text>{bike.bikeType}</Card.Text>
          </Card>
        ))}
    </div>
  );
};

export default Bike;
